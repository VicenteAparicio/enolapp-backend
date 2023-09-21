"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth = (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            throw new Error('There is no token.');
        }
        const secretKey = process.env.JWT_SECRET;
        const token = req.headers.authorization.split('')[1];
        const auth = jsonwebtoken_1.default.verify(token, secretKey);
        if (auth) {
            return next();
        }
    }
    catch (error) {
        res.status(500).send({
            data: "Authorization error"
        });
    }
};
exports.auth = auth;
