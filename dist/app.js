"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const router_1 = __importDefault(require("./Routes/router"));
require("reflect-metadata");
const data_source_1 = __importDefault(require("./Config/data-source"));
data_source_1.default.initialize()
    .then(() => console.log("Database connected"))
    .catch((error) => console.error(error));
const PORT = process.env.PORT || 3002;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
app.use(router_1.default);
app.listen(PORT);
