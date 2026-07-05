import { create } from 'zustand'

import { Toast } from '@/constants'

type State = {
    toasts: Toast[]
}

type Action = {
    showToast: (
        message: string,
        action?: () => void
    ) => void,
    removeToast: (id: number) => void
}

type ToastStore = State & Action

export const useToastStore = create<ToastStore>()((set, get) => ({
    toasts: [],

    showToast: (message, action) => {
        const id = (get().toasts.at(-1) ?? { id: 0 }).id + 1

        const a = action ?? (() => get().removeToast(id))

        set(state => ({
            toasts: [
                ...state.toasts,
                { message, id, action: a }
            ]
        }))
    },

    removeToast: (id) => set(state => {
        const toasts = state.toasts.filter(s => s.id !== id)

        return { toasts }
    })
}))