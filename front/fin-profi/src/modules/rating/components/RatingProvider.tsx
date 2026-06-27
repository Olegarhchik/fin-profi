import { createContext, Dispatch, PropsWithChildren, SetStateAction } from 'react'

import { UserRating } from '../types'

type RatingContextType = {
  count: number,
  rating: UserRating[],
  setRating: Dispatch<SetStateAction<UserRating[]>>
}

export const RatingContext = createContext<RatingContextType>({
  count: 0,
  rating: [],
  setRating: () => []
})

type RatingProviderProps = PropsWithChildren<{
  value: RatingContextType
}>

export function RatingProvider({ children, value }: RatingProviderProps) {
  return (
    <RatingContext value={value}>
      {children}
    </RatingContext>
  )
}
