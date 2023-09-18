import { DataSource } from "typeorm";
import 'reflect-metadata';
import { User } from "../Repository/entities/user.entity";
import { Vino } from "../Repository/entities/vino.entity";

export default new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    entities: [Vino, User],
    synchronize: true,
    logging: false
})