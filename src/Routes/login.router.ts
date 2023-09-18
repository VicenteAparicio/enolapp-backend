import { Router } from "express";
import { LoginController } from "../Controllers/loginController";

const loginController = new LoginController();

const loginRouter = Router();

loginRouter.post('/', loginController.validate);

export default loginRouter;