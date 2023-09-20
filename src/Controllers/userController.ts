import { Request, Response } from "express";
import { Usuario } from "../Repository/entities/user.entity";
import { IResponse } from "../Service/models/IResponse";
import { UserService } from "../Service/services/user.svc";

const userService = new UserService();

export class UserController {
    async list(
        res: Response
    ): Promise<void> {
        const response: IResponse<Usuario[]> = await userService.list();
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
        const response: IResponse<Usuario> = await userService.get(parseInt(req.params.user_id))
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
        const response: IResponse<boolean> = await userService.create(req.body)
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
        const response: IResponse<boolean> = await userService.remove(parseInt(req.params.user_id))
        if (response.data) {
            res.status(200).send(response);
        } else {
            res.status(400).send(response);
        }
    }
}
