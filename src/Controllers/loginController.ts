import { Request, Response, response } from "express";
import { LoginService } from "../Service/services/login.svc";
import { IResponse } from "../Service/interfaces/IResponse";

const loginService = new LoginService();

export class LoginController {
    async validate(
        req: Request,
        res: Response
    ): Promise<void> {
        const response: IResponse<string> = await loginService.validate(req.body.email, req.body.password);
        if (response.data) {
            res.status(200).send(response);
        } else {
            res.status(400).send(response);
        }
    }
}