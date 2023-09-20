
import database from '../../Config/data-source';

import { Usuario } from "../entities/user.entity";
import { IUserRepository } from '../interfaces/IUserRepository';

const repo = database.getRepository(Usuario);

export class UserRepository implements IUserRepository {
    async create(data: Partial<Usuario>): Promise<Usuario | null> {
        try {
            const user = repo.create(data);

            return await repo.save(user);
        } catch {
            console.error("Error: User was not created.");
        }
        return null;
    }

    async list(id?: number): Promise<Usuario[] | null> {
        try {
            return await repo.find();
        } catch {
            console.error('Error: Data was not fetch from database')
        }
        return null;
    }

    async getUserById(id: number): Promise<Usuario | null> {
        try {
            const result = repo.findOneBy(
                { id: id, })
            return result;
        } catch {
            console.error('Error: Data was not fetch from database')
        }
        return null
    }

    async getUserByEmail(email: string): Promise<Usuario | null> {
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
    async remove(user: Usuario): Promise<Usuario | null> {
        try {
            return await repo.remove(user);
        } catch {
            console.error("Error: User was not deleted from database")
        }
        return null;
    }
}