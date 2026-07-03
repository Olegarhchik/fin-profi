import { AxiosPromise } from "axios";

import type { AuthResponse, RegisterRequest } from "../types";
import { privateApi } from "../private";

export async function register(data: RegisterRequest): AxiosPromise<AuthResponse> {
    return privateApi.post<AuthResponse>("/auth/register", data)
}