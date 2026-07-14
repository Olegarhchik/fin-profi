import { useEffect } from 'react'

import { useToastStore } from '@/store'

export function useErrorEffect(error: Error | null) {
    const showToast = useToastStore(state => state.showToast)

    useEffect(() => {
        if (error)
            showToast(error.message)
    }, [error])
}