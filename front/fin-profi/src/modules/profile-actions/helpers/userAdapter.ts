import { UserDTO } from '@/constants'

import { User } from '../constants/types'

export function userAdapter(user: UserDTO): User {
    return {
        name: user.name,
        email: user.email
    }
}