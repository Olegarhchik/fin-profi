import { AUTH } from "./names"

type Auth = typeof AUTH[keyof typeof AUTH]

type Toast = {
    id: number,
    message: string,
    action: () => void
}

type Payload = {
    sub: string,
    id_user: string
}

type UserDTO = {
    id: number,
    name: string,
    email: string,
    points: number
}

export type {
    Auth,
    Toast,
    Payload,
    UserDTO
}