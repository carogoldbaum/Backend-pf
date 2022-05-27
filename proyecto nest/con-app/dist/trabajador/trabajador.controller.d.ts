import { TrabajadorService } from './trabajador.service';
import { CreateTrabajadorDto } from './dto/create-trabajador.dto';
import { UpdateTrabajadorDto } from './dto/update-trabajador.dto';
export declare class TrabajadorController {
    private readonly trabajadorService;
    constructor(trabajadorService: TrabajadorService);
    create(createTrabajadorDto: CreateTrabajadorDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTrabajadorDto: UpdateTrabajadorDto): string;
    remove(id: string): string;
}
