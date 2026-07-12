import { useQuery } from '@tanstack/react-query'

import { User } from '@/constants'

import { fetchUser } from '../api'
import { userAdapter } from '../helpers'

export function useUserQuery(id: number) {
    return useQuery({
        queryKey: ['fetchUser', id],
        queryFn: () => fetchUser(id),
        select: (data) => {
            if (!data) return {} as User
            return userAdapter(data)
        }
    })
}