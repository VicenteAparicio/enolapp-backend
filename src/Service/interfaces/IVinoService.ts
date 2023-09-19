import { Vino } from "../../Repository/entities/vino.entity"
import { IResponse } from "./IResponse"

export interface IVinoService {
    list: (
        id?: number
    ) => Promise<IResponse<Vino[]>>
    get: (
        id: number
    ) => Promise<IResponse<Vino>>
    create: (
        data: Partial<Vino>
    ) => Promise<IResponse<Vino>>
    update: (
        id: number,
        data: Partial<Vino>
    ) => Promise<IResponse<Vino>>
    remove: (
        id: number
    ) => Promise<IResponse<boolean>>
}