import * as typeorm from 'typeorm/globals';
import { afterEach, describe } from "node:test";
import { IVino } from "../../Service/models/vino.model";
import { Repository } from 'typeorm';

const VINO_MODEL_LIST: IVino[] = [
    {
        id: 1,
        userId: 1,
        año: 1998,
        variedad: 'Semi seco',
        tipo: 'Joven',
        color: 'Tinto',
        temperatura: 28,
        graduacion: 40,
        ph: 1,
        observaciones: 'Un vino para todos los días.',
    },
    {
        id: 2,
        userId: 1,
        año: 1999,
        variedad: 'Abocado',
        tipo: 'Reserva',
        color: 'Tinto',
        temperatura: 29,
        graduacion: 39,
        ph: 3,
        observaciones: 'Un vino especial.'
    },
    {
        id: 3,
        userId: 2,
        año: 2001,
        variedad: 'Dulce',
        tipo: 'Crianza',
        color: 'Blanco',
        temperatura: 17,
        graduacion: 29,
        ph: 2,
        observaciones: 'Perfecto para marinar con salmón al horno.'
    }
];

describe('Data Repository Unit Test', () => {
    afterEach(() => {
        jest.clearAllMocks();
    })

    jest.spyOn(typeorm, "getRepository").mockImplementation(() => {
        const original = jest.requireActual("typeorm");
        return {
            ...original,
            createQueryBuilder: jest.fn().mockImplementation(() => ({

            }))
        }
    }) as unknown as Repository<IVino>


    describe('GetAll', async () => {
        it('Fails cause no connection to database', () => {

        });

        it('Works', () => {


        });
    })
})