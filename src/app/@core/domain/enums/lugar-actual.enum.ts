export enum LugarActual {
    LABORATORIO = "Lab IIoT",
    PRESTADO = 'Prestado',
  }
  
  export function getAllEnumValues() {
    return Object.values(LugarActual);
  }
  
  export function getLugarActualDescription(value: LugarActual) {
    switch (value) {
      case 'Lab IIoT':
        return 'Lab IIoT';
  
      case 'Prestado':
        return 'Prestado';
  
      default:
        return null;
    }
  }
  