import { useProgressStore, useUserStore } from '@/store'
import { STATUS } from '@/constants'
import { delay } from '@/helpers'

import { setProgress, updateUser } from '../api'

export async function trigger() {
    useProgressStore.getState().setStatus(STATUS.SYNCING)

    let progress = useProgressStore.getState().getNextProgress()

    while (progress) {
        try {
            await setProgress(progress.articleId, {
                last_checkpoint: progress.progress,
                is_read: progress.isRead
            })

            useProgressStore.getState().setSynced({ articleId: progress.articleId })

            progress = useProgressStore.getState().getNextProgress()
        } catch (error) {
            useProgressStore.getState().setStatus(STATUS.ERROR)

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