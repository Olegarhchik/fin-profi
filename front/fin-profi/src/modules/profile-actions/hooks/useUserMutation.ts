import { useMutation } from '@tanstack/react-query'

import { queryClient } from '@/api'
import { useToastStore } from '@/store'

import { updateUser } from '../api'
import { FETCH_USER_KEY, type User } from '../constants'

export function useUserMutation() {
    const showToast = useToastStore(state => state.showToast)

    return useMutation({
        mutationFn: updateUser,

        onMutate: async ({ id, user }) => {
            await queryClient.cancelQueries({ queryKey: [...FETCH_USER_KEY, id] })

            const previousData = queryClient.getQueryData<User>([...FETCH_USER_KEY, id])

            queryClient.setQueryData<User>(
                [...FETCH_USER_KEY, id],
                (prevUser) => ({ ...prevUser, ...user })
            )

            return { previousData }
        },

        onSuccess: (_, { id }) => {
            queryClient.invalidateQueries({ queryKey: [...FETCH_USER_KEY, id] })
        },

        onError: (_, { id }, context) => {
            queryClient.setQueryData(["fetchUser", id], context?.previousData)
            showToast("Не удалось обновить профиль")
        }
    })
}