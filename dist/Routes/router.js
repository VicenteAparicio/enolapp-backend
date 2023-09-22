"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_router_1 = __importDefault(require("./login.router"));
const data_router_1 = __importDefault(require("./data.router"));
const user_router_1 = __importDefault(require("./user.router"));
const routes = (0, express_1.Router)();
routes.use('/login', login_router_1.default);
routes.use('/user', user_router_1.default);
routes.use('/data', data_router_1.default);
exports.default = routes;
