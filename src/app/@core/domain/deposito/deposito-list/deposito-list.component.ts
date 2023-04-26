import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Deposito } from '../deposito.model';
import { DepositoService } from '../deposito.service';
import {Estante} from "../../estantes/estantes.model";
import {EstanteService} from "../../estantes/estantes.service";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-deposito-list',
  templateUrl: './deposito-list.component.html',
  styleUrls: ['./deposito-list.component.css'],
})
export class DepositoListComponent implements OnInit {

  depositos: Deposito[] = [];
  estantes: Estante[] = [];

  display: boolean = false;

  private url = `${environment.URL_API}/deposito`;

  constructor(
    private service: DepositoService,
    private estanteService: EstanteService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getDeposito();
  }

  getDeposito(){
    this.service.getAll()
      .subscribe(
        (res) => {
          this.depositos = res;
          console.log(this.depositos);
        },
        (err) => {
          console.error(err);
        }
      )
  }

  getEventValue(event: any){
    return (event.target as HTMLInputElement).value;
  }

  delete(id: any) {
    this.confirmationService.confirm({
      message: 'Está seguro que desea eliminar?',
      accept: () => {
        this.service.delete(id)
          .subscribe(
            (res) => {
              this.getDeposito();
            },
            (error) => {
              this.display = true;
            }
          )
      },
      acceptLabel: "Confirmar",
      acceptButtonStyleClass: "p-button-danger p-mr-2"
    });
  }
}
