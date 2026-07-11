type AuthResponse = {
    access_token: string,
    token_type: string
}

type RegisterRequest = {
    name: string,
    email: string,
    password: string
}

type LoginRequest = {
    email: string,
    password: string
}

type Payload = {
    sub: string,
    id_user: string
}

export type { AuthResponse, RegisterRequest, LoginRequest, Payload }