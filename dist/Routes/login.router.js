"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loginController_1 = require("../Controllers/loginController");
const loginController = new loginController_1.LoginController();
const loginRouter = (0, express_1.Router)();
loginRouter.post('/', loginController.validate);
exports.default = loginRouter;
