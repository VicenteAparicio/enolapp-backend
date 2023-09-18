
import { User } from "../../Repository/entities/user.entity";
import bcrypt from 'bcrypt';
import { UserRepository } from "../../Repository/repositories/user.repo";
import jwt, { Secret } from "jsonwebtoken";
import { IResponse } from "../interfaces/IResponse";

const userRepository = new UserRepository()

const USER_ERROR = "Wrong user";
const PWD_ERROR = "Password doesn't match.";

export class LoginService {
    async validate(email: string, pwd: string): Promise<IResponse<string>> {
        let response: IResponse<string> = {
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
            createdAt: new Date,
        }

        const secret_key: Secret = process.env.JWT_SECRET!;

        response.data = jwt.sign(payload, secret_key)
        return response;
    }

}