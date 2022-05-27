import { CreateTrabajadorDto } from './dto/create-trabajador.dto';
import { UpdateTrabajadorDto } from './dto/update-trabajador.dto';
export declare class TrabajadorService {
    create(createTrabajadorDto: CreateTrabajadorDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTrabajadorDto: UpdateTrabajadorDto): string;
    remove(id: number): string;
}
