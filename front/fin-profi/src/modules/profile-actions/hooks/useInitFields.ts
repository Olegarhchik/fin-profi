import { useEffect, useState } from 'react'

import { useErrorEffect } from '@/hooks'

import { User } from '../constants'
import { useUserQuery } from './useUserQuery'

export function useInitFields(id: number) {
    const { data, isError, isLoading, error } = useUserQuery(id)
    const [fields, setFields] = useState<User>({ name: "", email: "" })

    const isLoadingSkeleton = isLoading || isError

    useEffect(() => {
        if (!isLoading && data) {
            setFields(data)
        }
    }, [isLoading, data])

    useErrorEffect(error)

    return { fields, setFields, isLoadingSkeleton }
}