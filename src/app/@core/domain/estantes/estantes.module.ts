import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepositoService } from '../deposito/deposito.service';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EstanteRoutingModule } from './estantes-routing.module';
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
import { EstanteService } from './estantes.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { EstanteListComponent } from './estantes-list/estante-list.component';
import { EstanteEditComponent } from './estantes-edit/estantes-edit.component';

@NgModule({
  imports: [
    CommonModule,
    EstanteRoutingModule,
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
  declarations: [    EstanteListComponent, EstanteEditComponent
  ],
  providers: [
    EstanteService,
    ConfirmationService,
    Dialog,
    MessageService
  ]
})
export class EstanteModule {}
