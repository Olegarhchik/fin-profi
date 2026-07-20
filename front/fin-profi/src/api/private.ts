import axios, { AxiosError } from 'axios'

import { BASE_URL } from '@/constants'
import { useToastStore, useUserStore } from '@/store'

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

interface FailedRequestQueueItem {
    resolve: (token: string | null) => void
    reject: (error: AxiosError) => void
}

let isRefreshing = false
let failedQueue: FailedRequestQueueItem[] = []

const processQueue = (error: AxiosError | null, token: string | null = null) => {
    failedQueue.forEach((prom) => {
        if (error) {
            prom.reject(error)
        } else {
            prom.resolve(token)
        }
    })
    failedQueue = []
}

privateApi.interceptors.response.use(
    (config) => config,
    async (error) => {
        const originalRequest = error.config

        if (error.response?.status === 401 && !originalRequest._retry) {
            if (isRefreshing) {
                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject })
                })
                    .then((token) => {
                        originalRequest.headers["Authorization"] = `Bearer ${token}`
                        return privateApi(originalRequest)
                    })
                    .catch((err) => Promise.reject(err))
            }

            originalRequest._retry = true
            isRefreshing = true

            try {
                const { data } = await axios.post("/auth/refresh")

                const newToken = data.access_token
                useUserStore.getState().setToken(newToken)
                privateApi.defaults.headers.common["Authorization"] = `Bearer ${newToken}`

                processQueue(null, newToken)
                return privateApi(originalRequest)
            } catch (refreshError) {
                const axiosError = refreshError as AxiosError
                processQueue(axiosError, null)

                useUserStore.getState().logout()
                useToastStore.getState().showToast("Пожалуйста, войдите снова")
                return Promise.reject(axiosError)
            } finally {
                isRefreshing = false
            }
        }

        return Promise.reject(error)
    }
)