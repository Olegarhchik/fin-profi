import { UserDTO } from "@/constants"

type User = Pick<UserDTO, 'name' | 'email'>

export type { User }