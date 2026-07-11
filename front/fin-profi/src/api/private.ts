import axios from 'axios'

import { BASE_URL } from '@/constants'
import { useUserStore } from '@/store'

export const privateApi = axios.create({
    headers: {
        Accept: "application/json"
    },
    baseURL: BASE_URL,
    withCredentials: true
})

privateApi.interceptors.request.use((config => {
    config.headers.Authorization = `Bearer ${useUserStore.getState().accessToken}`

    return config
}))