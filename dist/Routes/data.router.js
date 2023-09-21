"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dataController_1 = require("../Controllers/dataController");
const dataController = new dataController_1.DataController();
const vinoRouter = (0, express_1.Router)();
// vinoRouter.get('/', dataController.list);
vinoRouter.get('/fromUser/:user_id', 
// auth,
dataController.list);
vinoRouter.get('/:vino_id', 
//  auth,
dataController.get);
vinoRouter.post('/', 
// auth,
dataController.create);
vinoRouter.put('/:vino_id', 
// auth,
dataController.update);
vinoRouter.delete('/:vino_id', 
//  auth,
dataController.delete);
exports.default = vinoRouter;
