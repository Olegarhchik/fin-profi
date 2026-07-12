import { User } from "@/constants"

export function userAdapter(user): Omit<User, 'id'> {
    return {
        name: user.name,
        email: user.email,
        points: user.points
    }
}