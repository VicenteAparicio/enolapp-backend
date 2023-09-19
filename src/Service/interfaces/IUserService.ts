import { Usuario } from "../../Repository/entities/user.entity"
import { IResponse } from "./IResponse"

export interface IUserService {
    list: (
        id?: number
    ) => Promise<IResponse<Usuario[]>>
    get: (
        id: number
    ) => Promise<IResponse<Usuario>>
    create: (
        data: Partial<Usuario>
    ) => Promise<IResponse<boolean>>
    remove: (
        id: number
    ) => Promise<IResponse<boolean>>
}