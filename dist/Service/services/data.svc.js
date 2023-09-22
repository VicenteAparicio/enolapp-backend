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
exports.DataService = void 0;
const data_repo_1 = require("../../Repository/repositories/data.repo");
const NO_REMOVE = "Data can't be deleted.";
const NO_DATA = "Data not found.";
const NO_CREATE = "Wyne data was not saved.";
const dataRepository = new data_repo_1.DataRepository();
class DataService {
    list(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = {
                error: undefined,
                data: undefined
            };
            const result = yield dataRepository.list(id);
            if ((result === null || result === void 0 ? void 0 : result.length) === 0) {
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
            const result = yield dataRepository.get(id);
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
            const result = yield dataRepository.create(data);
            if (!result) {
                response.error = NO_CREATE;
            }
            else {
                response.data = result;
            }
            return response;
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = {
                error: undefined,
                data: undefined
            };
            const result = yield dataRepository.update(id, data);
            if (!result) {
                response.error = NO_CREATE;
            }
            else {
                response.data = result;
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
            const vinoExist = yield dataRepository.get(id);
            if (vinoExist === null || vinoExist === void 0 ? void 0 : vinoExist.variedad) {
                const result = yield dataRepository.remove(vinoExist);
                if (!result || result == null) {
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
exports.DataService = DataService;
