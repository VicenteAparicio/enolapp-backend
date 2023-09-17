import { Router } from 'express';
import loginRouter from './login.router';
import userRouter from './user.router';
import infoRouter from './info.router';

const routes = Router();

routes.use('/login', loginRouter);
routes.use('/user', userRouter);
routes.use('/info', infoRouter);

export default routes;