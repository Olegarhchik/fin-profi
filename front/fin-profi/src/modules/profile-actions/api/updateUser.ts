import { publicApi } from '@/api'
import { UserDTO } from '@/constants'

import { User } from '../constants'
import { userAdapter } from '../helpers'

type Params = {
    id: number,
    user: User
}

export async function updateUser({ id, user }: Params): Promise<User> {
    try {
        const response = await publicApi.put<UserDTO>(`users/${id}`, {}, {
            params: user
        })

        return userAdapter(response.data)
    } catch (error) {
        throw error
    }
}