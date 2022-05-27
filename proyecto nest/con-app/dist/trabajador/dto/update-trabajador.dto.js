"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTrabajadorDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_trabajador_dto_1 = require("./create-trabajador.dto");
class UpdateTrabajadorDto extends (0, mapped_types_1.PartialType)(create_trabajador_dto_1.CreateTrabajadorDto) {
}
exports.UpdateTrabajadorDto = UpdateTrabajadorDto;
//# sourceMappingURL=update-trabajador.dto.js.map