
import database from '../../Config/data-source';

import { User } from "../entities/user.entity";

const repo = database.getRepository(User);

export class UserRepository {
    async create(data: Partial<User>): Promise<User | null> {
        try {
            const user = repo.create(data);

            return await repo.save(user);
        } catch {
            console.error("Error: User was not created.");
        }
        return null;
    }

    async list(id?: number): Promise<User[] | null> {
        try {
            return await repo.find();
        } catch {
            console.error('Error: Data was not fetch from database')
        }
        return null;
    }

    async getUserById(id: number): Promise<User | null> {
        try {
            const result = repo.findOneBy(
                { id: id, })
            return result;
        } catch {
            console.error('Error: Data was not fetch from database')
        }
        return null
    }

    async getUserByEmail(email: string): Promise<User | null> {
        try {
            const result = repo.findOneBy(
                { email: email, })
            return result;
        } catch {
            console.error('Error: Data was not fetch from database')
        }
        return null;
    }

    // update(id: number, data: User): Promise<User> {
    //     console.error("Method not implemented.");
    //     return null
    // }
    async remove(user: User): Promise<User | null> {
        try {
            return await repo.remove(user);
        } catch {
            console.error("Error: User was not deleted from database")
        }
        return null;
    }
}