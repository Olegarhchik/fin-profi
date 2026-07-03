import { User } from "@/constants";

type UserRating = Pick<User, 'id' | 'name' | 'points'>
type UserRatingResponse = {
    count: number,
    list: UserRating[]
}

type Highlight = 'leader' | 'you'

export type { UserRating, UserRatingResponse, Highlight }