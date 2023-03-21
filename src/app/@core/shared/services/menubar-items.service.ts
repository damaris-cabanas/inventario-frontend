import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class MenubarItemsService {
  items: MenuItem[] = [
    {
      label: 'Depositos',
      icon: 'pi pi-inbox',
      routerLink: ['deposito'],
    },
    {
      label: 'Estantes',
      icon: 'pi pi-table',
      routerLink: ['estante'],
    },
    {
      label: 'Inventario',
      icon: 'pi pi-th-large',
      routerLink: ['inventario'],
    },
    {
      label: 'Otros',
      icon: 'pi pi-globe',
      routerLink: ['otros'],
    },

  ];
}
