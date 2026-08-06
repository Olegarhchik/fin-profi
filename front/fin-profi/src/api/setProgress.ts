import { privateApi } from './private'
import { ProgressParams } from '@/constants'

export async function setProgress({ id, params }: {
    id: number,
    params: ProgressParams
}) {
    try {
        await privateApi.post(`/users/set_progress/${id}`, {}, { params })
    } catch (error) {
        throw error
    }
}