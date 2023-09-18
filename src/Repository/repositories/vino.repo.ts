
import database from '../../Config/data-source';

import { Vino } from "../entities/vino.entity";

const repo = database.getRepository(Vino);

export class VinoRepository {

    async list(id?: number): Promise<Vino[] | null> {
        try {
            return repo.findBy({ user_id: id })
        } catch {
            console.error('Error: Data was not fetch from database')
        }
        return null;
    }

    async get(id: number): Promise<Vino | null> {
        try {
            return repo.findOneBy({ id: id })
        } catch {
            console.error('Error: Data was not fetch from database')
        }
        return null;
    }

    async create(data: Partial<Vino>): Promise<Vino> {
        try {
            const Vino = repo.create(data);

            return await repo.save(Vino);
        } catch {
            throw new Error("Error: Wyne was not been created.")
        }
    }

    async update(id: number, data: Partial<Vino>): Promise<Vino | null> {
        try {
            let vinoToUpdate = await repo.findOneBy({ id: id });

            if (vinoToUpdate?.variedad) {

                vinoToUpdate.año = data.año!
                vinoToUpdate.color = data.color!
                vinoToUpdate.tipo = data.tipo!
                vinoToUpdate.variedad = data.variedad!
                vinoToUpdate.temperatura = data.temperatura!
                vinoToUpdate.graduacion = data.graduacion!
                vinoToUpdate.ph = data.ph!
                vinoToUpdate.observaciones = data.observaciones!

                return await repo.save(vinoToUpdate);
            }
            return null;
        } catch {
            throw new Error("Error: Wyne has not been updated.");
        }
    }

    async remove(data: Vino): Promise<Vino | null> {
        try {
            return await repo.remove(data);
        } catch {
            throw new Error("Error: Wyne was not been removed from database.")
        }
    }
}