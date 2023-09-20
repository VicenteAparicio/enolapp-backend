import { Vino } from "../entities/vino.entity"

export interface IDataRepository {
    list: (
        id: number
    ) => Promise<Vino[] | null>
    get: (
        id: number
    ) => Promise<Vino | null>
    create: (
        data: Partial<Vino>
    ) => Promise<Vino | null>
    update: (
        id: number,
        data: Partial<Vino>
    ) => Promise<Vino | null>
    remove: (
        user: Vino
    ) => Promise<Vino | null>
}