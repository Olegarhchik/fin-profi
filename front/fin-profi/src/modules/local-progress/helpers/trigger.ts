import { useProgressStore, useUserStore } from '@/store'
import { STATUS } from '@/constants'

import { setProgress, updateUser } from '../api'
import { queryClient } from '@/api'
import { FETCH_STATISTICS_KEY } from '@/modules/statistics'
import { FETCH_ACTIVITY_KEY } from '@/modules/activity'
import { FETCH_RATING_KEY } from '@/modules/rating'

export async function trigger() {
    useProgressStore.getState().setStatus(STATUS.SYNCING)

    let progress = useProgressStore.getState().getNextProgress()
    const id = useUserStore.getState().id!

    while (progress) {
        try {
            await setProgress(progress.articleId, {
                last_checkpoint: progress.progress,
                is_read: progress.isRead
            })

            Promise.all([
                queryClient.invalidateQueries({ queryKey: [...FETCH_STATISTICS_KEY, id] }),
                queryClient.invalidateQueries({ queryKey: [...FETCH_ACTIVITY_KEY, id] })
            ])
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

        queryClient.invalidateQueries({ queryKey: [...FETCH_RATING_KEY, id] })
        useProgressStore.getState().setSynced({ user: true })
    } catch (error) {
        return { error }
    }

    useProgressStore.getState().setStatus(STATUS.CLOSED)

    return { error: null }
}