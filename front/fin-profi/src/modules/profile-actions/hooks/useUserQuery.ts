import { useQuery } from '@tanstack/react-query'

import { fetchUser } from '../api'

export function useUserQuery(id: number) {
    return useQuery({
        queryKey: ['fetchUser', id],
        queryFn: () => fetchUser(id)
    })
}