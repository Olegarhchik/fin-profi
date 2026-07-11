import { User } from '@/constants'

import { publicApi } from './public'

export async function fetchUser(id: number): Promise<User> {
    try {
        const response = await publicApi.get<User>(`/users/${id}`)

        return response.data
    } catch (error) {
        throw error
    }
}