"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
require("reflect-metadata");
const vino_entity_1 = require("../Repository/entities/vino.entity");
const user_entity_1 = require("../Repository/entities/user.entity");
exports.default = new typeorm_1.DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    entities: [vino_entity_1.Vino, user_entity_1.Usuario],
    synchronize: true,
    logging: false
});
