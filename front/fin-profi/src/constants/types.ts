import { AUTH } from "./names"

type Auth = typeof AUTH[keyof typeof AUTH]

type UserDTO = {
    id: number,
    name: string,
    email: string,
    points: number
}

type Toast = {
    id: number,
    message: string,
    action: () => void
}

type Payload = {
    sub: string,
    id_user: string
}

export type {
    Auth,
    UserDTO,
    Toast,
    Payload
}