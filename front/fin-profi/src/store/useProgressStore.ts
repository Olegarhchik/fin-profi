import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { Progress, STATUS, Status } from '@/constants'

type Synced<T> = T & { synced: boolean }

type Article = Synced<Progress & {
    updatedAt: number
}>

type State = {
    status: Status,
    user: Synced<{
        points: number,
        currentArticleId: number | null
    }>,
    articles: Article[],
    count: number,
    progress: number
}

type Action = {
    setStatus: (status: Status) => void,
    setPoints: (points: number) => void,
    setSynced: ({
        articleId,
        user
    }: {
        articleId?: number,
        user?: boolean
    }) => void,
    setArticleProgress: ({ articleId, progress }: Progress) => void,
    getNextProgress: () => (Article | undefined)
}

type ProgressStore = State & Action

export const useProgressStore = create<ProgressStore>()(persist((set, _, store) => ({
    status: "waiting",

    user: {
        points: 0,
        currentArticleId: null,
        synced: false
    },

    articles: [],

    count: 1,

    progress: 0,

    setStatus: (status) => {
        if (status === STATUS.CLOSED) {
            setTimeout(() => set({
                ...store.getInitialState(),
                status
            }), 1000)
        }

        set(state => ({
            ...state,
            status
        }))
    },

    setPoints: (points) => {
        set(state => ({
            ...state,
            user: {
                ...state.user,
                points: state.user.points + points
            }
        }))
    },

    setSynced: ({ articleId, user }) => {
        if (user) {
            set(state => ({
                ...state,
                user: {
                    ...state.user,
                    synced: true
                }
            }))
        }

        if (articleId) {
            set(state => ({
                ...state,
                articles: state.articles.map(obj => {
                    if (obj.articleId === articleId) {
                        return {
                            ...obj,
                            synced: true,
                            updatedAt: Date.now()
                        }
                    }

                    return obj
                })
            }))
        }

        const res = store.getState().articles
            .filter(obj => obj.synced)

        set(state => ({
            ...state,
            progress: (res.length + (+store.getState().user.synced)) / store.getState().count * 100
        }))
    },

    setArticleProgress: ({ articleId, progress }) => {
        const index = store.getState().articles
            .findIndex(obj => obj.articleId === articleId)

        if (progress !== 100) {
            set(state => ({
                ...state,
                user: {
                    ...state.user,
                    currentArticleId: articleId
                }
            }))
        }

        if (index === -1) {
            set(state => ({
                ...state,
                articles: [...state.articles, {
                    articleId,
                    progress,
                    synced: false,
                    updatedAt: Date.now()
                }],
                count: state.count + 1
            }))
        }
        else {
            set(state => ({
                ...state,
                articles: state.articles.map((obj, objIndex) => {
                    if (objIndex === index)
                        return {
                            ...obj,
                            progress,
                            synced: false,
                            updatedAt: Date.now()
                        }

                    return obj
                })
            }))
        }
    },

    getNextProgress: () => {
        const res = store.getState().articles
            .sort((a, b) => a.updatedAt - b.updatedAt)
            .find(obj => !obj.synced)

        return res
    }
}), { name: "progressStore" }))