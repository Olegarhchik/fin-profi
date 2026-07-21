import { useProgressStore, useUserStore } from '@/store'
import { STATUS } from '@/constants'

import { setProgress, updateUser } from '../api'
import { delay } from '@/helpers'

export async function trigger() {
    useProgressStore.getState().setStatus(STATUS.SYNCING)

    let progress = useProgressStore.getState().getNextProgress()

    while (progress) {
        try {
            await setProgress(progress.articleId, {
                last_checkpoint: progress.progress,
                is_read: progress.progress === 100
            })

            useProgressStore.getState().setSynced({ articleId: progress.articleId })

            progress = useProgressStore.getState().getNextProgress()

            await delay(1000)
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

        await delay(1000)
    } catch (error) {
        return { error }
    }

    useProgressStore.getState().setStatus(STATUS.CLOSED)

    return { error: null }
}