export enum Status {
  OK = 'OK',
  REPARACION = 'REP',
  AVERIADO = 'AVE',
  MANTENIMIENTO = 'MAN'
}

export function getAllEnumValues() {
  return Object.values(Status);
}

export function getStatusDescription(value: Status) {
  switch (value) {
    case 'OK':
      return 'OK';

    case 'REP':
      return 'REP';

    case 'AVE':
      return 'AVE';

    case 'MAN':
      return 'MAN';

    default:
      return null;
  }
}
