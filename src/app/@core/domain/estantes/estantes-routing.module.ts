import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstanteEditComponent } from './estantes-edit/estantes-edit.component';
import { EstanteListComponent } from './estantes-list/estante-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: EstanteListComponent },
      { path: 'form', component: EstanteEditComponent },
      { path: 'form/:id', component: EstanteEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstanteRoutingModule {}
