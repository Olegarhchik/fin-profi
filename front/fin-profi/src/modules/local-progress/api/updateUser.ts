import { publicApi } from '@/api'

export type UserParams = {
    points: number
}

export async function updateUser(id: number, params: UserParams) {
    try {
        await publicApi.put(`/users/${id}`, {}, { params })
    } catch (error) {
        throw error
    }
}