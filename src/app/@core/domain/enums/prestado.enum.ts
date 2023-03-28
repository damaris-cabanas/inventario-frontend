export enum Prestado {
    SI = "Sí",
    NO = 'No',
  }

  export function getAllEnumValues() {
    return Object.values(Prestado);
  }

  export function getPrestadoDescription(value: Prestado) {
    switch (value) {
      case 'Sí':
        return 'Sí';

      case 'No':
        return 'No';

      default:
        return null;
    }
  }
