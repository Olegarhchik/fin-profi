import { BASE_URL } from "@/constants"
import { useUserStore } from "@/store"
import axios, { AxiosError } from "axios"

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

privateApi.interceptors.response.use((config => {
    return config
}), ((error: AxiosError) => {
    if (error?.response?.status === 401) {
        console.log("АВТОРИЗУЙТЕСЬ")
    }
}))