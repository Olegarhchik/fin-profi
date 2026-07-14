import { useEffect, useState } from 'react'

import { useToastStore } from '@/store'

import { User } from '../constants'
import { useUserQuery } from './useUserQuery'

export function useInitFields(id: number) {
    const showToast = useToastStore(state => state.showToast)
    const { data, isError, isLoading } = useUserQuery(id)
    const [fields, setFields] = useState<User>({ name: "", email: "" })

    const isLoadingSkeleton = isLoading || isError

    useEffect(() => {
        if (!isLoading && data) {
            setFields(data)
        }
    }, [isLoading, data])

    useEffect(() => {
        if (isError)
            showToast("Не удалось загрузить данные пользователя")
    }, [isError])

    return { fields, setFields, isLoadingSkeleton }
}