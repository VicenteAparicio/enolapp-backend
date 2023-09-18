import { Router, Request, Response } from "express";
import { VinoController } from "../Controllers/vinoController";
import { auth } from "../Middleware/auth";

const vinoController = new VinoController();

const vinoRouter = Router();

// vinoRouter.get('/', vinoController.list);
vinoRouter.get('/fromUser/:user_id',
    // auth, 
    vinoController.list);
vinoRouter.get('/:vino_id',
    //  auth,
    vinoController.get);
vinoRouter.post('/',
    // auth,
    vinoController.create);
vinoRouter.put('/:vino_id',
    // auth,
    vinoController.update);
vinoRouter.delete('/:vino_id',
    //  auth,
    vinoController.delete);

export default vinoRouter;