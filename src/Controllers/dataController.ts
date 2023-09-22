import { Request, Response } from "express";
import { DataService } from "../Service/services/data.svc";
import { Vino } from "../Repository/entities/vino.entity";
import { IResponse } from "../Service/models/IResponse";

const dataService = new DataService();

export class DataController {

    async list(
        req: Request,
        res: Response
    ): Promise<void> {
        const response: IResponse<Vino[]> = await dataService.list(parseInt(req.params.user_id, 10));
        if (response.data) {
            res.status(200).send(response);
        } else {
            res.status(400).send(response);
        }
    }

    async get(
        req: Request,
        res: Response
    ): Promise<void> {
        const response: IResponse<Vino> = await dataService.get(parseInt(req.params.vino_id, 10));
        if (response.data) {
            res.status(200).send(response);
        } else {
            res.status(400).send(response);
        }
    }

    async create(
        req: Request,
        res: Response
    ): Promise<void> {
        const response: IResponse<Vino> = await dataService.create(req.body)
        if (response.data) {
            res.status(200).send(response);
        } else {
            res.status(400).send(response);
        }
    }

    async update(
        req: Request,
        res: Response
    ): Promise<void> {
        const response: IResponse<Vino> = await dataService.update(parseInt(req.params.vino_id, 10), req.body)
        if (response.data) {
            res.status(200).send(response);
        } else {
            res.status(400).send(response);
        }
    }

    async delete(
        req: Request,
        res: Response
    ): Promise<void> {
        const response: IResponse<boolean> = await dataService.remove(parseInt(req.params.vino_id, 10))
        if (response.data) {
            res.status(200).send(response);
        } else {
            res.status(400).send(response);
        }
    }
}