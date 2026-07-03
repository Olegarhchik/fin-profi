import { AxiosPromise } from "axios"

import type { AuthResponse, LoginRequest } from "../types"
import { publicApi } from "../public"

export async function login(data: LoginRequest): AxiosPromise<AuthResponse> {
    return publicApi.post<AuthResponse>('/auth/login', data)
}