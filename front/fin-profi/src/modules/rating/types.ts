import { User } from "@/constants";

type UserRating = Required<Pick<User, 'id' | 'name' | 'points'>>
type UserRatingResponse = {
    count: number,
    list: UserRating[]
}

type Highlight = 'leader' | 'you'

export type { UserRating, UserRatingResponse, Highlight }