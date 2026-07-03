import { create } from "zustand"
import { persist } from "zustand/middleware"

import { AUTH, User, type Auth } from "@/constants"
import { api } from "@/api"
import type { LoginRequest, Payload, RegisterRequest } from "@/api"

import { parseToken, userAdapter } from "./helpers"

type State = {
    auth: Auth,
    accessToken: string | null,
    user: Partial<User>,
}

type Action = {
    register: (data: RegisterRequest) => Promise<void>,
    login: (data: LoginRequest) => Promise<void>,
    logout: () => void
}

type UserStore = State & Action

export const useUserStore = create<UserStore>()(persist((set, _, store) => ({
    auth: AUTH.GUEST,
    accessToken: null,
    user: {} as User,

    register: async (data) => {
        const registerResponse = await api.private.register(data)
        const accessToken = registerResponse.data.access_token
        const { payload } = parseToken<Payload>(accessToken)

        const userResponse = await api.public.fetchUser(payload.id_user)
        const user = userAdapter(userResponse.data)

        set(() => ({
            auth: AUTH.AUTHORIZED,
            accessToken,
            user
        }))
    },
    login: async (data) => {
        const loginResponse = await api.private.login(data)
        const accessToken = loginResponse.data.access_token
        const { payload } = parseToken<Payload>(accessToken)

        const userResponse = await api.public.fetchUser(payload.id_user)
        const user = userAdapter(userResponse.data)

        set(() => ({
            auth: AUTH.AUTHORIZED,
            accessToken,
            user
        }))
    },
    logout: () => set(() => store.getInitialState())
}), { name: "userStore" }))