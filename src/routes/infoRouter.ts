import { Router, Request, Response } from "express";

const infoRouter = Router();

infoRouter.get('/', (req: Request, res: Response) => {
    res.send({ data: 'Info Router' })
});

export default infoRouter;