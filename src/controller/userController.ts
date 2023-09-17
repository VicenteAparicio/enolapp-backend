import { Request, Response } from "express";
import { DatabaseRepository } from "../utils/declarations";
import { User } from "../Repository/entities/user.entity";
import { UserService } from "../Service/services/user.svc";

const userService = new UserService();

export class UserController {
    async list(
        req: Request,
        res: Response
    ): Promise<void> {

        res.status(200).send({ data: 'Get list User' })
    }

    async get(
        req: Request,
        res: Response
    ): Promise<void> {
        const data: User | null = await userService.get(parseInt(req.params.user_id))
        res.status(200).send({ data })
    }

    async create(
        req: Request,
        res: Response
    ): Promise<void> {
        const data: User = await userService.create(req.body)
        res.status(200).send({ data })
    }

    async update(
        req: Request,
        res: Response
    ): Promise<void> {
        res.status(200).send({ data: 'User UPDATE' })
    }

    async delete(
        req: Request,
        res: Response
    ): Promise<void> {
        const data: boolean = await userService.remove(parseInt(req.params.user_id))
        res.status(200).send({ data })
    }
}
