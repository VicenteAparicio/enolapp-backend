
import database from '../../config/data-source';

import { User } from "../entities/user.entity";
import { DatabaseRepository, Id, Query } from "../../utils/declarations";

const repo = database.getRepository(User);

export class UserRepository implements DatabaseRepository<User> {
    async create(data: Partial<User>, query?: Query | undefined): Promise<User> {
        const user = repo.create(data);

        await repo.save(user);

        return user;
    }
    list(query?: Query | undefined): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    async get(id: Id, query?: Query | undefined): Promise<User | null> {
        try {
            const result = repo.findOne(
                {
                    where: {
                        id: id,
                    },
                })
            return result;
        } catch {
            throw new Error('Error: Data was not fetch from database')
        }
    }
    update(id: Id, data: User, query?: Query | undefined): Promise<User> {
        throw new Error("Method not implemented.");
    }
    async remove(id: Id, query?: Query | undefined): Promise<boolean> {
        try {
            let returnValue = false;
            const result = await repo.delete(id);
            if (result.affected) {
                returnValue = true;
            }
            return returnValue;
        } catch {
            throw new Error("Error: User was not deleted from database")
        }


    }
}