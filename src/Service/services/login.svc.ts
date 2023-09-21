
import bcrypt from 'bcrypt';
import jwt, { Secret } from "jsonwebtoken";
import { IResponse } from "../models/IResponse";
import { UserRepository } from "../../Repository/repositories/user.repo";
import { ILoggerResponse } from '../models/ILoggerResponse';

const userRepository = new UserRepository()

const USER_ERROR = "Wrong user";
const PWD_ERROR = "Password doesn't match.";

export class LoginService {
    async validate(email: string, pwd: string): Promise<IResponse<ILoggerResponse>> {
        const response: IResponse<ILoggerResponse> = {
            error: undefined,
            data: undefined
        }
        const userExist = await userRepository.getUserByEmail(email)

        if (!userExist) {
            response.error = USER_ERROR;
            return response;
        }

        const verify = await bcrypt.compare(pwd, userExist.password);

        if (!verify) {
            response.error = PWD_ERROR;
            return response;
        }

        const payload = {
            userId: userExist.id,
            createdAt: new Date(),
        }

        const secretKey: Secret = process.env.JWT_SECRET!;

        const loggerInfo: ILoggerResponse = {
            id: userExist.id,
            nickname: userExist.nickname,
            token: jwt.sign(payload, secretKey)
        }

        response.data = loggerInfo;

        return response;
    }

}