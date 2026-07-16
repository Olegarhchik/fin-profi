import { useQuery } from '@tanstack/react-query'

import { fetchUser } from '../api'
import { FETCH_USER_KEY } from '../constants'

export function useUserQuery(id: number) {
    return useQuery({
        queryKey: [...FETCH_USER_KEY, id],
        queryFn: () => fetchUser(id),
        retry: false
    })
}