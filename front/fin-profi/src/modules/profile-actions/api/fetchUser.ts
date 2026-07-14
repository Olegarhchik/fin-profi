import { publicApi } from '@/api'

import { userAdapter } from '../helpers'
import { UserDTO, User } from '../constants'

export async function fetchUser(id: number): Promise<User> {
    try {
        const response = await publicApi.get<UserDTO>(`/users/${id}`)

        return userAdapter(response.data)
    } catch (error) {
        throw new Error("Не удалось загрузить данные пользователя")
    }
}