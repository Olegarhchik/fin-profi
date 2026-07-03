import { BASE_URL } from "@/constants"
import axios from "axios"

export const publicApi = axios.create({
    headers: {
        Accept: "application/json"
    },
    baseURL: BASE_URL,
})