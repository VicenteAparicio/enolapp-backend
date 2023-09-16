import { Router, Request, Response } from "express";

const loginRouter = Router();

loginRouter.get('/', (req: Request, res: Response) => {
    res.send({ data: 'Login Router' })
});

loginRouter.post('/', async (req: Request, res: Response) => {
    try {
        const emailCheck = req.body.email;
        const passwordCheck = req.body.password;
        // let token = await loginController.validate(emailCheck, passwordCheck);

    } catch (err: any) {
        return res.status(500).json({
            message: err.message
        })
    }
    res.send({ data: 'Login Router' })
});

export default loginRouter;