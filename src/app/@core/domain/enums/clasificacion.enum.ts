export enum Clasificacion {    
    HERRAMIENTAS = 'HE',
    KITDESARROLLO = 'KD',
    EQUIPOLABORATORIO = 'EL',
    SENSOR = 'SE',
  }
  
  export function getAllEnumValues() {
    return Object.values(Clasificacion);
  }
  
  export function getClasificacionDescription(value: Clasificacion) {
    switch (value) {
      case 'HE':
        return 'HE';
  
      case 'KD':
        return 'KD';
  
      case 'EL':
        return 'EL';

      case 'SE':
        return 'SE';
  
      default:
        return null;
    }
  }
  