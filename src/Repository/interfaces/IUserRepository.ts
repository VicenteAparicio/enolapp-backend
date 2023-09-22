import { Usuario } from "../entities/user.entity"

export interface IUserRepository {
    create: (
        data: Partial<Usuario>
    ) => Promise<Usuario | null>
    list: (
    ) => Promise<Usuario[] | null>
    getUserById: (
        id: number
    ) => Promise<Usuario | null>
    getUserByEmail: (
        email: string
    ) => Promise<Usuario | null>
    remove: (
        user: Usuario
    ) => Promise<Usuario | null>
}