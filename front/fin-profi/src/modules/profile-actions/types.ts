import { User } from "@/constants";

type UserCredentials = Pick<User, 'id' | 'name' | 'email'>

export type { UserCredentials }