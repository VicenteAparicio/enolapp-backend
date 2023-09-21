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
exports.DataRepository = void 0;
const data_source_1 = __importDefault(require("../../Config/data-source"));
const vino_entity_1 = require("../entities/vino.entity");
const repo = data_source_1.default.getRepository(vino_entity_1.Vino);
class DataRepository {
    list(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (id !== null && id !== undefined && !Number.isNaN(id)) {
                try {
                    return repo.findBy({ userId: id });
                }
                catch (_a) {
                    console.error('Error: Data has not been retrieve from the database');
                }
            }
            return null;
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return repo.findOneBy({ id });
            }
            catch (_a) {
                console.error('Error: Data hast not been retrieve from the database');
            }
            return null;
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Vino = repo.create(data);
                return yield repo.save(Vino);
            }
            catch (_a) {
                console.error("Error: Data has not been created.");
            }
            return null;
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const vinoToUpdate = yield repo.findOneBy({ id });
                if (vinoToUpdate === null || vinoToUpdate === void 0 ? void 0 : vinoToUpdate.variedad) {
                    vinoToUpdate.año = data.año;
                    vinoToUpdate.color = data.color;
                    vinoToUpdate.tipo = data.tipo;
                    vinoToUpdate.variedad = data.variedad;
                    vinoToUpdate.temperatura = data.temperatura;
                    vinoToUpdate.graduacion = data.graduacion;
                    vinoToUpdate.ph = data.ph;
                    vinoToUpdate.observaciones = data.observaciones;
                    return yield repo.save(vinoToUpdate);
                }
            }
            catch (_a) {
                console.error("Error: Wyne has not been updated.");
            }
            return null;
        });
    }
    remove(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield repo.remove(data);
            }
            catch (_a) {
                console.error("Error: Wyne was not been removed from database.");
            }
            return null;
        });
    }
}
exports.DataRepository = DataRepository;
