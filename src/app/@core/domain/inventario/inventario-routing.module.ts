import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventarioEditComponent } from './inventario-edit/inventario-edit.component';
import { InventarioListComponent } from './inventario-list/inventario-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: InventarioListComponent },
      { path: 'form', component: InventarioEditComponent },
      { path: 'form/:id', component: InventarioEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventarioRoutingModule {}
