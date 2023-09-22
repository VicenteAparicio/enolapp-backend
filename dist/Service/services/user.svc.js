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
exports.UserService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_repo_1 = require("../../Repository/repositories/user.repo");
const NO_DATA = "Data not found.";
const NO_REMOVE = "Data can't be deleted.";
const USER_IN_USE = "Email is already in use.";
const USER_NOT_CREATED = "User can't be created.";
const userRepository = new user_repo_1.UserRepository();
class UserService {
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = {
                error: undefined,
                data: undefined
            };
            const result = yield userRepository.list();
            if (!result) {
                response.error = NO_DATA;
            }
            else {
                response.data = result;
            }
            return response;
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = {
                error: undefined,
                data: undefined
            };
            const result = yield userRepository.getUserById(id);
            if (!result) {
                response.error = NO_DATA;
            }
            else {
                response.data = result;
            }
            return response;
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = {
                error: undefined,
                data: undefined
            };
            const userExist = yield userRepository.getUserByEmail(data.email);
            if (userExist) {
                response.error = USER_IN_USE;
            }
            else {
                const password = data.password;
                const pwdHashed = bcrypt_1.default.hashSync(password, 10);
                data.password = pwdHashed;
                const result = yield userRepository.create(data);
                if (!result) {
                    response.error = USER_NOT_CREATED;
                }
                else {
                    response.data = true;
                }
            }
            return response;
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = {
                error: undefined,
                data: undefined
            };
            const userToRemove = yield userRepository.getUserById(id);
            if (userToRemove === null || userToRemove === void 0 ? void 0 : userToRemove.nickname) {
                const result = yield userRepository.remove(userToRemove);
                if (!result) {
                    response.error = NO_REMOVE;
                }
                else {
                    response.data = true;
                }
            }
            else {
                response.error = NO_DATA;
            }
            return response;
        });
    }
}
exports.UserService = UserService;
