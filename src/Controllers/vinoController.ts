import { Request, Response } from "express";
import { VinoService } from "../Service/services/vino.svc";
import { Vino } from "../Repository/entities/vino.entity";
import { IResponse } from "../Service/interfaces/IResponse";

const vinoService = new VinoService();

export class VinoController {

    async list(
        req: Request,
        res: Response
    ): Promise<void> {
        const response: IResponse<Vino[]> = await vinoService.list(parseInt(req.params.user_id));
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
        const response: IResponse<Vino> = await vinoService.get(parseInt(req.params.vino_id));
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
        const response: IResponse<Vino> = await vinoService.create(req.body)
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
        const response: IResponse<Vino> = await vinoService.update(parseInt(req.params.vino_id), req.body)
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
        const response: IResponse<boolean> = await vinoService.remove(parseInt(req.params.vino_id))
        if (response.data) {
            res.status(200).send(response);
        } else {
            res.status(400).send(response);
        }
    }
}