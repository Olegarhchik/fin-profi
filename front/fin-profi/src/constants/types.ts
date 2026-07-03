import { AUTH } from "./names"

export type Auth = typeof AUTH[keyof typeof AUTH]

export type User = {
    id: number,
    name: string,
    email: string,
    points: number
}