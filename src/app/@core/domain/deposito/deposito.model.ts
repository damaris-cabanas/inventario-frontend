export class Deposito{
    id!: number;
    nombre!: string;
    status!: Status;
}


enum Status {
    ACTIVO = 'A',
    INACTIVO = 'I',
}
  