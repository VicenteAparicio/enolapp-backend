import { Router, Request, Response } from "express";

const registerRouter = Router();

registerRouter.get('/', (req: Request, res: Response) => {
    res.send({ data: 'Register Router' })
});

export default registerRouter;