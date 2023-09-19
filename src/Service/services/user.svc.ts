import { Usuario } from "../../Repository/entities/user.entity";
import bcrypt from "bcrypt";
import { IResponse } from "../interfaces/IResponse";
import { UserRepository } from "../../Repository/repositories/user.repo";
import { IUserService } from "../interfaces/IUserService";

const NO_DATA = "Data not found."
const NO_REMOVE = "Data can't be deleted."
const USER_IN_USE = "Email is already in use."
const USER_NOT_CREATED = "User can't be created."

const userRepository = new UserRepository()

export class UserService implements IUserService {
    async list(id?: number): Promise<IResponse<Usuario[]>> {
        let response: IResponse<Usuario[]> = {
            error: undefined,
            data: undefined
        }
        const result = await userRepository.list();
        if (!result) {
            response.error = NO_DATA;
        } else {
            response.data = result;
        }

        return response;
    }

    async get(id: number): Promise<IResponse<Usuario>> {
        let response: IResponse<Usuario> = {
            error: undefined,
            data: undefined
        }
        const result = await userRepository.getUserById(id);
        if (!result) {
            response.error = NO_DATA;
        } else {
            response.data = result;
        }

        return response;
    }
    async create(data: Partial<Usuario>): Promise<IResponse<boolean>> {
        let response: IResponse<boolean> = {
            error: undefined,
            data: undefined
        }

        const userExist = await userRepository.getUserByEmail(data.email!);
        if (userExist) {
            response.error = USER_IN_USE;
        } else {
            const password = data.password!;
            const pwdHashed = bcrypt.hashSync(password, 10);

            data.password = pwdHashed;

            const result = await userRepository.create(data)

            if (!result) {
                response.error = USER_NOT_CREATED;
            } else {
                response.data = true;
            }
        }

        return response;
    }

    // update(id: number, data: user): Promise<user> {
    //     throw new Error("Method not implemented.");
    // }

    async remove(id: number): Promise<IResponse<boolean>> {
        let response: IResponse<boolean> = {
            error: undefined,
            data: undefined
        }
        const userToRemove = await userRepository.getUserById(id);

        if (userToRemove?.nickname) {
            const result = await userRepository.remove(userToRemove);

            if (!result) {
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