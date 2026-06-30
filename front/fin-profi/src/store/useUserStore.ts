import { create } from "zustand"
import { persist } from "zustand/middleware"

import { AUTH, User, type Auth } from "@/constants"

type UserStore = {
    auth: Auth,
    setAuth: (auth: Auth) => void,

    user: Partial<User>,
    setUser: (user: Partial<User>) => void,

    clearStore: () => void
}

export const useUserStore = create<UserStore>()(persist((set, _, store) => ({
    auth: AUTH.GUEST,
    setAuth: (auth: Auth) => {
        set(state => ({
            ...state,
            auth
        }))
    },

    user: {},
    setUser: (user: Partial<User>) => {
        set(state => ({
            ...state,
            user
        }))
    },

    clearStore: () => set(store.getInitialState())
}), { name: "userStore" }))