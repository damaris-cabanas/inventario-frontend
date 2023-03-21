import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Deposito } from '../deposito.model';
import { DepositoService } from '../deposito.service';

@Component({
  selector: 'app-deposito-list',
  templateUrl: './deposito-list.component.html',
  styleUrls: ['./deposito-list.component.css'],
})
export class DepositoListComponent implements OnInit {
  depositos!: Deposito[];
  dataLoading: boolean = true;
  constructor(
    private depositoService: DepositoService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.depositoService.getDepositos().subscribe((depositos) => {
      this.depositos = depositos;
      this.dataLoading = false;
    });
  }

  deleteRow(id: number) {
    console.log(id);
    this.confirmationService.confirm({
      accept: () => {
        this.onDelete(id);
      },
      acceptLabel: 'Sí',
      header: 'Sistema',
      icon: 'pi pi-exclamation-triangle',
      message:
        '¿Seguro que desea borrar el registro? Esta acción no se puede deshacer.',
      defaultFocus: 'none',
    });
  }

  getEventValue(event: any){
    return (event.target as HTMLInputElement).value;
  }

  onDelete(id: number) {
    this.depositoService.deleteDeposito(id).subscribe((_) => {
      this.depositos = this.depositos.filter((deposito) => deposito.id != id);
      this.messageService.add({
        severity: 'info',
        summary: 'Sistema',
        detail: 'Registro eliminado',
      });
    });
  }
}
