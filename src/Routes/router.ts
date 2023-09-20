import { Router } from 'express';
import loginRouter from './login.router';
import dataRouter from './data.router';
import userRouter from './user.router';

const routes = Router();

routes.use('/login', loginRouter);
routes.use('/user', userRouter);
routes.use('/data', dataRouter);

export default routes;