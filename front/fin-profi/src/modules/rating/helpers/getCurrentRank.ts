import { UserRating } from "../types";

export function getCurrentRank(rating: UserRating[], id: number) {
    if (rating.length <= 8) {
        return rating
            .slice(0, 8)
            .findIndex(user => user.id === id) + 1
    }

    return rating.length
}