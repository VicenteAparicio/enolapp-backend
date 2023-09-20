
import database from '../../Config/data-source';

import { Vino } from "../entities/vino.entity";
import { IDataRepository } from '../interfaces/IDataRepository';

const repo = database.getRepository(Vino);

export class DataRepository implements IDataRepository {

    async list(id: number): Promise<Vino[] | null> {
        if (id != null && id != undefined && !Number.isNaN(id)) {
            try {
                return repo.findBy({ userId: id })
            } catch {
                console.error('Error: Data has not been retrieve from the database')
            }
        }
        return null;
    }

    async get(id: number): Promise<Vino | null> {
        try {
            return repo.findOneBy({ id: id })
        } catch {
            console.error('Error: Data hast not been retrieve from the database')
        }
        return null;
    }

    async create(data: Partial<Vino>): Promise<Vino | null> {
        try {
            const Vino = repo.create(data);

            return await repo.save(Vino);
        } catch {
            console.error("Error: Data has not been created.")
        }
        return null;
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
        } catch {
            console.error("Error: Wyne has not been updated.");
        }
        return null;
    }

    async remove(data: Vino): Promise<Vino | null> {
        try {
            return await repo.remove(data);
        } catch {
            console.error("Error: Wyne was not been removed from database.")
        }
        return null;
    }
}