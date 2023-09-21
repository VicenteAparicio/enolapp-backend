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
exports.DataController = void 0;
const data_svc_1 = require("../Service/services/data.svc");
const dataService = new data_svc_1.DataService();
class DataController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield dataService.list(parseInt(req.params.user_id, 10));
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
            const response = yield dataService.get(parseInt(req.params.vino_id, 10));
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
            const response = yield dataService.create(req.body);
            if (response.data) {
                res.status(200).send(response);
            }
            else {
                res.status(400).send(response);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield dataService.update(parseInt(req.params.vino_id, 10), req.body);
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
            const response = yield dataService.remove(parseInt(req.params.vino_id, 10));
            if (response.data) {
                res.status(200).send(response);
            }
            else {
                res.status(400).send(response);
            }
        });
    }
}
exports.DataController = DataController;
