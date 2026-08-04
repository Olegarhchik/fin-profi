import { useQuery } from '@tanstack/react-query'

import { fetchUser } from '@/api'
import { AUTH, FETCH_USER_KEY, User } from '@/constants'
import { useUserStore } from '@/store'

export function useUserQuery() {
    const id = useUserStore(state => state.id)
    const auth = useUserStore(state => state.auth)

    return useQuery({
        queryKey: [...FETCH_USER_KEY, id],
        queryFn: id === null ? () => ({} as User) : () => fetchUser(id),
        enabled: auth === AUTH.AUTHORIZED
    })
}