import jwt, { Secret } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export const auth = (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.headers.authorization) {
            throw new Error('There is no token.');
        }

        const secretKey: Secret = process.env.JWT_SECRET!;

        const token = req.headers.authorization.split(' ')[1];

        const auth = jwt.verify(token, secretKey);

        if (auth) {
            return next();
        }
    } catch (error) {
        res.status(500).send({
            data: "Authorization error"
        })
    }
}