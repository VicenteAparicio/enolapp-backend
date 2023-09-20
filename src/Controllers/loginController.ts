import { Request, Response, response } from "express";
import { LoginService } from "../Service/services/login.svc";
import { IResponse } from "../Service/models/IResponse";
import { ILoggerResponse } from "../Service/models/ILoggerResponse";

const loginService = new LoginService();

export class LoginController {
    async validate(
        req: Request,
        res: Response
    ): Promise<void> {
        const response: IResponse<ILoggerResponse> = await loginService.validate(req.body.email, req.body.password);
        if (response.data) {
            res.status(200).send(response);
        } else {
            res.status(400).send(response);
        }
    }
}