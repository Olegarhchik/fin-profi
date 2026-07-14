import { publicApi } from '@/api'
import { UserDTO } from '@/constants'

import { userAdapter } from '../helpers'
import { User } from '../constants/types'

export async function fetchUser(id: number): Promise<User> {
    try {
        const response = await publicApi.get<UserDTO>(`/users/${id}`)

        return userAdapter(response.data)
    } catch (error) {
        throw error
    }
}