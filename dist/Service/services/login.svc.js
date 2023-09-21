"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_repo_1 = require("../../Repository/repositories/user.repo");
const userRepository = new user_repo_1.UserRepository();
const USER_ERROR = "Wrong user";
const PWD_ERROR = "Password doesn't match.";
class LoginService {
    validate(email, pwd) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = {
                error: undefined,
                data: undefined
            };
            const userExist = yield userRepository.getUserByEmail(email);
            if (!userExist) {
                response.error = USER_ERROR;
                return response;
            }
            const verify = yield bcrypt_1.default.compare(pwd, userExist.password);
            if (!verify) {
                response.error = PWD_ERROR;
                return response;
            }
            const payload = {
                userId: userExist.id,
                createdAt: new Date(),
            };
            const secretKey = process.env.JWT_SECRET;
            const loggerInfo = {
                id: userExist.id,
                nickname: userExist.nickname,
                token: jsonwebtoken_1.default.sign(payload, secretKey)
            };
            response.data = loggerInfo;
            return response;
        });
    }
}
exports.LoginService = LoginService;
