type UserDTO = {
    id: number,
    name: string,
    email: string,
    points: number
}

type User = Pick<UserDTO, 'name' | 'email'>

export type { UserDTO, User }