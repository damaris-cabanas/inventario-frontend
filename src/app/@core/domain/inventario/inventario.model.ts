import { Deposito } from '../deposito/deposito.model';
import { Clasificacion } from '../enums/clasificacion.enum';
import { LugarActual } from '../enums/lugar-actual.enum';
import { Prestado } from '../enums/prestado.enum';
import { Status } from '../enums/status.enums';

export class Inventario {
    filter(arg0: (val: any) => boolean): Inventario[] {
        throw new Error('Method not implemented.');
    }

    id!: number;

    codigo!: string;

    descripcion!: string;

    clasificacion!: Clasificacion;

    marca!: string;

    modelo!: string;

    bp!: string;

    serial!: string;

    status!: Status;

    comentario!: string;

    lugaractual!: LugarActual;

    prestado!: Prestado;

}
