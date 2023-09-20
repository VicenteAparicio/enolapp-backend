import { Router, Request, Response } from "express";
import { auth } from "../Middleware/auth";
import { DataController } from "../Controllers/dataController";

const dataController = new DataController();

const vinoRouter = Router();

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

export default vinoRouter;