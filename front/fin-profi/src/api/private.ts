import axios, { isAxiosError } from 'axios'

import { BASE_URL } from '@/constants'
import { useToastStore, useUserStore } from '@/store'
import { useNavigate } from 'react-router-dom'

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