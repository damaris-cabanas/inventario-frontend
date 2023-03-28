import { Status } from "../enums/status.enums";

export class Deposito {
  filter(arg0: (val: any) => boolean): Deposito[] {
    throw new Error('Method not implemented.');
}

  id!: number;
  nombre!: string;
  status!: Status;
}
