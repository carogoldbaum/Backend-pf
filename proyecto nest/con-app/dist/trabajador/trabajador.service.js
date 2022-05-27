"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrabajadorService = void 0;
const common_1 = require("@nestjs/common");
let TrabajadorService = class TrabajadorService {
    create(createTrabajadorDto) {
        return 'This action adds a new trabajador';
    }
    findAll() {
        return `This action returns all trabajador`;
    }
    findOne(id) {
        return `This action returns a #${id} trabajador`;
    }
    update(id, updateTrabajadorDto) {
        return `This action updates a #${id} trabajador`;
    }
    remove(id) {
        return `This action removes a #${id} trabajador`;
    }
};
TrabajadorService = __decorate([
    (0, common_1.Injectable)()
], TrabajadorService);
exports.TrabajadorService = TrabajadorService;
//# sourceMappingURL=trabajador.service.js.map