import { User } from "../../Repository/entities/user.entity";
import bcrypt from "bcrypt";
import { UserRepository } from "../../Repository/repositories/user.repo";
import { IResponse } from "../interfaces/IResponse";

const NO_DATA = "Data not found."
const NO_REMOVE = "User can't be deleted."
const USER_IN_USE = "Email is already in use."
const USER_NOT_CREATED = "User can't be created."

const userRepository = new UserRepository()

export class UserService {
    async create(data: Partial<User>): Promise<IResponse<boolean>> {
        let response: IResponse<boolean> = {
            error: undefined,
            data: undefined
        }

        const userExist = await userRepository.getUserByEmail(data.email!);
        if (userExist) {
            response.error = USER_IN_USE;
        }

        const password = data.password!;
        const pwdHashed = bcrypt.hashSync(password, 10);

        data.password = pwdHashed;

        const result = await userRepository.create(data)

        if (!result) {
            response.error = USER_NOT_CREATED;
        } else {
            response.data = true;
        }

        return response;
    }

    async list(id?: number): Promise<IResponse<User[]>> {
        let response: IResponse<User[]> = {
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

    async get(id: number): Promise<IResponse<User>> {
        let response: IResponse<User> = {
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

    // update(id: number, data: User): Promise<User> {
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
        }

        return response;
    }
}