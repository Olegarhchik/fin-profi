import { useProgressStore, useUserStore } from '@/store'
import { STATUS } from '@/constants'

import { setProgress, updateUser } from '../api'

export async function trigger() {
    let progress = useProgressStore.getState().getNextProgress()

    while (progress) {
        try {
            await setProgress(progress.articleId, {
                last_checkpoint: progress.progress,
                is_read: progress.progress === 100
            })

            useProgressStore.getState().setSynced({ articleId: progress.articleId })

            progress = useProgressStore.getState().getNextProgress()
        } catch (error) {
            return { error }
        }
    }

    const user = useProgressStore.getState().user

    try {
        await updateUser(useUserStore.getState().id!, {
            points: user.points
        })

        useProgressStore.getState().setSynced({ user: true })
    } catch (error) {
        return { error }
    }

    useProgressStore.getState().setStatus(STATUS.CLOSED)

    return { error: null }
}