import { login, register } from "./auth"
import { fetchUser } from "./fetchUser"

export const api = {
    private: {
        login,
        register
    },
    public: {
        fetchUser
    }
}

export type {
    RegisterRequest,
    LoginRequest,
    Payload
} from "./types"