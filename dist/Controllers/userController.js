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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_svc_1 = require("../Service/services/user.svc");
const userService = new user_svc_1.UserService();
class UserController {
    list(res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield userService.list();
            if (response.data) {
                res.status(200).send(response);
            }
            else {
                res.status(400).send(response);
            }
        });
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield userService.get(parseInt(req.params.user_id, 10));
            if (response.data) {
                res.status(200).send(response);
            }
            else {
                res.status(400).send(response);
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield userService.create(req.body);
            if (response.data) {
                res.status(200).send(response);
            }
            else {
                res.status(400).send(response);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield userService.remove(parseInt(req.params.user_id, 10));
            if (response.data) {
                res.status(200).send(response);
            }
            else {
                res.status(400).send(response);
            }
        });
    }
}
exports.UserController = UserController;
