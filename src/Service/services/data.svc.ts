import { Vino } from "../../Repository/entities/vino.entity";

import { IResponse } from "../models/IResponse";
import { IDataService } from "../interfaces/IDataService";
import { DataRepository } from "../../Repository/repositories/data.repo";

const NO_REMOVE = "Data can't be deleted."
const NO_DATA = "Data not found."
const NO_CREATE = "Wyne data was not saved."

const dataRepository = new DataRepository()

export class DataService implements IDataService {

    async list(id: number): Promise<IResponse<Vino[]>> {
        const response: IResponse<Vino[]> = {
            error: undefined,
            data: undefined
        }
        const result = await dataRepository.list(id)

        if (result!?.length === 0) {
            response.error = NO_DATA;
        } else {
            response.data = result!;
        }

        return response;
    }

    async get(id: number): Promise<IResponse<Vino>> {
        const response: IResponse<Vino> = {
            error: undefined,
            data: undefined
        }
        const result = await dataRepository.get(id)

        if (!result) {
            response.error = NO_DATA;
        } else {
            response.data = result!;
        }

        return response;
    }

    async create(data: Partial<Vino>): Promise<IResponse<Vino>> {
        const response: IResponse<Vino> = {
            error: undefined,
            data: undefined
        }
        const result = await dataRepository.create(data)

        if (!result) {
            response.error = NO_CREATE;
        } else {
            response.data = result!;
        }

        return response;
    }

    async update(id: number, data: Partial<Vino>): Promise<IResponse<Vino>> {
        const response: IResponse<Vino> = {
            error: undefined,
            data: undefined
        }
        const result = await dataRepository.update(id, data);
        if (!result) {
            response.error = NO_CREATE;
        } else {
            response.data = result!;
        }

        return response;
    }

    async remove(id: number): Promise<IResponse<boolean>> {
        const response: IResponse<boolean> = {
            error: undefined,
            data: undefined
        }

        const vinoExist = await dataRepository.get(id);

        if (vinoExist?.userId) {

            const result = await dataRepository.remove(vinoExist)

            if (!result || result == null) {
                response.error = NO_REMOVE;
            } else {
                response.data = true;
            }
        } else {
            response.error = NO_DATA;
        }
        return response;
    }
}