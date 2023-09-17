import { User } from "../../Repository/entities/user.entity";
import { Id, Query } from "../../utils/declarations";
import { UserRepository } from "../../Repository/repositories/user.repo";

const userRepository = new UserRepository()

export class UserService {
    async create(data: Partial<User>, query?: Query | undefined): Promise<User> {
        return await userRepository.create(data, query)
    }
    list(query?: Query | undefined): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    async get(id: Id, query?: Query | undefined): Promise<User | null> {
        return await userRepository.get(id, query)
    }
    update(id: Id, data: User, query?: Query | undefined): Promise<User> {
        throw new Error("Method not implemented.");
    }
    async remove(id: Id, query?: Query | undefined): Promise<boolean> {
        const userExist = await userRepository.get(id);

        if (userExist?.nickname) {
            return await userRepository.remove(id, query)
        }

        return false;
    }
}