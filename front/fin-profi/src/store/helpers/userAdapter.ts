import { User } from "@/constants";

export function userAdapter(user): User {
    return {
        id: user.id_user,
        name: user.name,
        email: user.email,
        points: user.points
    }
}