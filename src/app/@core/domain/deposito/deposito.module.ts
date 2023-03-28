import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepositoRoutingModule } from './deposito-routing.module';
import { DepositoListComponent } from './deposito-list/deposito-list.component';
import { DepositoEditComponent } from './deposito-edit/deposito-edit.component';
import { PrimeNgModule } from 'src/app/@core/shared/prime-ng/prime-ng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { Dialog, DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/table';
import { InventarioRoutingModule } from '../inventario/inventario-routing.module';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DepositoService } from './deposito.service';

@NgModule({
  imports: [
    CommonModule,
    DepositoRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    CalendarModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    DropdownModule,
    InputNumberModule,
    ConfirmDialogModule,
    ButtonModule,
    DialogModule,
    TableModule,
    CardModule,
    CalendarModule,
    InputTextareaModule,
  ],
  declarations: [DepositoListComponent, DepositoEditComponent],
  providers:[
    DepositoService,
    ConfirmationService,
    Dialog,
    MessageService
  ]
})
export class DepositoModule {}
