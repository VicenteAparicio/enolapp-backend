import { Vino } from "../../Repository/entities/vino.entity";
import { VinoRepository } from "../../Repository/repositories/vino.repo";

import { IResponse } from "../interfaces/IResponse";
import { IVinoService } from "../interfaces/IVinoService";

const NO_REMOVE = "Data can't be deleted."
const NO_DATA = "Data not found."
const NO_CREATE = "Wyne data was not saved."

const vinoRepository = new VinoRepository()

export class VinoService implements IVinoService {

    async list(id?: number): Promise<IResponse<Vino[]>> {
        let response: IResponse<Vino[]> = {
            error: undefined,
            data: undefined
        }
        const result = await vinoRepository.list(id)

        if (result!?.length == 0) {
            response.error = NO_DATA;
        } else {
            response.data = result!;
        }

        return response;
    }

    async get(id: number): Promise<IResponse<Vino>> {
        let response: IResponse<Vino> = {
            error: undefined,
            data: undefined
        }
        const result = await vinoRepository.get(id)

        if (!result) {
            response.error = NO_DATA;
        } else {
            response.data = result!;
        }

        return response;
    }

    async create(data: Partial<Vino>): Promise<IResponse<Vino>> {
        let response: IResponse<Vino> = {
            error: undefined,
            data: undefined
        }
        const result = await vinoRepository.create(data)

        if (!result) {
            response.error = NO_CREATE + result;
        } else {
            response.data = result!;
        }

        return response;
    }

    async update(id: number, data: Partial<Vino>): Promise<IResponse<Vino>> {
        let response: IResponse<Vino> = {
            error: undefined,
            data: undefined
        }
        const result = await vinoRepository.update(id, data);
        if (!result) {
            response.error = NO_CREATE;
        } else {
            response.data = result!;
        }

        return response;
    }

    async remove(id: number): Promise<IResponse<boolean>> {
        let response: IResponse<boolean> = {
            error: undefined,
            data: undefined
        }

        const vinoExist = await vinoRepository.get(id);

        if (vinoExist?.variedad) {

            const result = await vinoRepository.remove(vinoExist)

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