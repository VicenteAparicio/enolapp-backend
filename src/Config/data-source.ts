import { DataSource } from "typeorm";
import 'reflect-metadata';
import { Vino } from "../Repository/entities/vino.entity";
import { Usuario } from "../Repository/entities/user.entity";

export default new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    entities: [Vino, Usuario],
    synchronize: true,
    logging: false
})