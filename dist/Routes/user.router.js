"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../Controllers/userController");
const userController = new userController_1.UserController();
const userRouter = (0, express_1.Router)();
userRouter.get('/', userController.list);
userRouter.get('/:user_id', userController.get);
userRouter.post('/', userController.create);
userRouter.delete('/:user_id', userController.delete);
exports.default = userRouter;
