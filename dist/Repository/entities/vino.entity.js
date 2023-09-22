"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vino = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
let Vino = class Vino {
};
exports.Vino = Vino;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Vino.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Vino.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Vino.prototype, "a\u00F1o", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Vino.prototype, "variedad", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Vino.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Vino.prototype, "color", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Vino.prototype, "temperatura", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Vino.prototype, "graduacion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Vino.prototype, "ph", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Vino.prototype, "observaciones", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.Usuario, (usuario) => usuario.vinos, {
        onDelete: "CASCADE"
    }),
    __metadata("design:type", user_entity_1.Usuario)
], Vino.prototype, "user", void 0);
exports.Vino = Vino = __decorate([
    (0, typeorm_1.Entity)()
], Vino);
