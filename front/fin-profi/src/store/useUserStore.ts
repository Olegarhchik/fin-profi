import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { AUTH, type Auth } from '@/constants'
import { api } from '@/api'
import type { LoginRequest, Payload, RegisterRequest } from '@/api'

import { parseToken } from './helpers'

type State = {
    auth: Auth,
    accessToken: string | null,
    id: number | null
}

type Action = {
    register: (data: RegisterRequest) => Promise<void>,
    login: (data: LoginRequest) => Promise<void>,
    logout: () => void,
}

type UserStore = State & Action

export const useUserStore = create<UserStore>()(persist((set, _, store) => ({
    auth: AUTH.GUEST,
    accessToken: null,
    id: null,

    register: async (data) => {
        const registerResponse = await api.private.register(data)
        const accessToken = registerResponse.data.access_token
        const { payload } = parseToken<Payload>(accessToken)

        set(() => ({
            auth: AUTH.AUTHORIZED,
            accessToken,
            id: parseInt(payload.id_user)
        }))
    },

    login: async (data) => {
        const loginResponse = await api.private.login(data)
        const accessToken = loginResponse.data.access_token
        const { payload } = parseToken<Payload>(accessToken)

        set(() => ({
            auth: AUTH.AUTHORIZED,
            accessToken,
            id: parseInt(payload.id_user)
        }))
    },

    logout: () => set(() => store.getInitialState())
}), { name: "userStore" }))