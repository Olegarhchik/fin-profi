import { useQuery } from '@tanstack/react-query'

import { api } from '@/api'
import { User } from '@/constants'
import { userAdapter } from '@/helpers'

export function useUserQuery(id: number) {
    return useQuery({
        queryKey: ['fetchUser', id],
        queryFn: () => api.public.fetchUser(id),
        select: (data) => {
            if (!data) return {} as User
            return userAdapter(data)
        }
    })
}