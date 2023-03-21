import { GenericAtributes } from '../../shared/models/genericAtributes.model';

export class Usuario extends GenericAtributes{
    nombre!: string;
    login!: string;
    password!: string;
}
