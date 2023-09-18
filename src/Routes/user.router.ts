import { Router } from "express";
import { UserController } from "../Controllers/userController";

const userController = new UserController();

const userRouter = Router();

userRouter.get('/', userController.list);
userRouter.get('/:user_id', userController.get);
userRouter.post('/', userController.create);
// userRouter.put('/:user_id', userController.update);
userRouter.delete('/:user_id', userController.delete);

export default userRouter;