import { privateApi } from '@/api'

export type ProgressParams = {
    last_checkpoint: number,
    is_read: boolean
}

export async function setProgress(id: number, params: ProgressParams) {
    try {
        await privateApi.post(`/users/set_progress/${id}`, {}, { params })
    } catch (error) {
        throw error
    }
}