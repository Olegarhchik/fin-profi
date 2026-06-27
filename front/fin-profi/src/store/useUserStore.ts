import { create } from "zustand"
import { persist } from "zustand/middleware"

import { AUTH, type Auth } from "../constants"

type UserStore = {
    auth: Auth,
    setAuth: (auth: Auth) => void
}

export const useUserStore = create<UserStore>()(persist((set) => ({
    auth: AUTH.GUEST,
    setAuth: (auth: Auth) => {
        set(state => ({
            ...state,
            auth
        }))
    }
}), { name: "userStore" }))