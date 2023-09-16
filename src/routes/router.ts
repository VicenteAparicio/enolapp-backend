import { Router } from 'express';
import loginRouter from './loginRouter';
import registerRouter from './registerRouter';
import infoRouter from './infoRouter';

const routes = Router();

routes.use('/login', loginRouter);
routes.use('/register', registerRouter);
routes.use('/info', infoRouter);

export default routes;