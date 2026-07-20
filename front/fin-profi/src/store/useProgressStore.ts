import { Progress } from '@/constants'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type State = {
    user: {
        points: number,
        currentArticleId: number | null
    },
    articles: Progress[]
}

type Action = {
    setUser: (points?: number, currentArticleId?: number) => void,
    setProgress: ({ articleId, progress }: Progress) => void,
    getProgress: (articleId: number) => number
}

type ProgressStore = State & Action

export const useProgressStore = create<ProgressStore>()(persist((set, _, store) => ({
    user: {
        points: 0,
        currentArticleId: null
    },

    articles: [
        {
            articleId: 1,
            progress: 100
        },
        {
            articleId: 2,
            progress: 66
        },
        {
            articleId: 4,
            progress: 20
        }
    ],

    setUser: (points, currentArticleId) => {
        if (points)
            set(state => ({
                ...state,
                user: {
                    ...state.user,
                    points
                }
            }))

        if (currentArticleId)
            set(state => ({
                ...state,
                user: {
                    ...state.user,
                    currentArticleId
                }
            }))
    },

    setProgress: ({ articleId, progress }) => {
        set(state => ({
            ...state,
            articles: [...state.articles, {
                articleId,
                progress
            }]
        }))
    },

    getProgress: (articleId) => {
        const res = store.getState().articles
            .find(obj => obj.articleId === articleId)

        return res?.progress ?? 0
    }
}), { name: "progressStore" }))