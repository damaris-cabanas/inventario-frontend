import { Deposito } from '../deposito/deposito.model';
import { Status } from '../enums/status.enums';

export class Estantes {
    filter(arg0: (val: any) => boolean): Estantes[] {
        throw new Error('Method not implemented.');
    }

    id!: number;

    nombre!: string;

    status!: Status;

    deposito!: Deposito;
}
