import { AxiosPromise } from "axios";

import { User } from "@/constants";

import { publicApi } from "./public";

export async function fetchUser(id: string): AxiosPromise<User> {
    return publicApi.get<User>(`/users/${id}`)
}