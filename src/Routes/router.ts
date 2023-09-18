import { Router } from 'express';
import loginRouter from './login.router';
import userRouter from './user.router';
import vinoRouter from './vino.router';

const routes = Router();

routes.use('/login', loginRouter);
routes.use('/user', userRouter);
routes.use('/vino', vinoRouter);

export default routes;