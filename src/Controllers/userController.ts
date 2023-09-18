import { Request, Response } from "express";
import { User } from "../Repository/entities/user.entity";
import { UserService } from "../Service/services/user.svc";
import { IResponse } from "../Service/interfaces/IResponse";

const userService = new UserService();

export class UserController {
    async list(
        req: Request,
        res: Response
    ): Promise<void> {
        const response: IResponse<User[]> = await userService.list();
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
        const response: IResponse<User> = await userService.get(parseInt(req.params.user_id))
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

    // async update(
    //     req: Request,
    //     res: Response
    // ): Promise<void> {
    //     res.status(200).send({ data: 'User UPDATE' })
    // }

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
