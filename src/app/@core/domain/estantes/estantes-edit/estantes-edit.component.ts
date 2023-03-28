import { Component, OnInit } from '@angular/core';
import {Deposito} from "../../deposito/deposito.model";
import {getStatusDescription, Status} from "../../enums/status.enums";
import {ActivatedRoute, Router} from "@angular/router";
import {DepositoService} from "../../deposito/deposito.service";
import {ConfirmationService} from "primeng/api";
import {Estante} from "../estantes.model";
import {EstanteService} from "../estantes.service";

@Component({
  selector: 'app-estantes-edit',
  templateUrl: './estantes-edit.component.html',
  styleUrls: ['./estantes-edit.component.css']
})
export class EstanteEditComponent implements OnInit {
  estantes = new Estante();
  deposito: Deposito[] = [];


  isModoEdicion: boolean = false;

  estados = Object.values(Status).map(value => ({ label: getStatusDescription(value), value: value}));

  displayDialog: boolean = false;

  submitted: boolean | undefined;

  ruta = "/estante";

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: EstanteService,
    private confirmationService: ConfirmationService,
    private depositoService: DepositoService

  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.activatedRoute.paramMap
      .subscribe(
        (paramMap) => {
          const id = paramMap.get('id');

          if (id) {
            this.isModoEdicion = true;
            this.service.getById(id)
              .subscribe(
                (estante) => {
                  this.estantes = estante;
                },
                (error) => {
                  console.log("error al cargar " + error);
                }
              )
          }
        }
      )
  }

  getDepositoById(depositoId: number){
    this.depositoService.getByIdDepositos(depositoId)
      .subscribe(
        (res) => {
          this.deposito = res;
          console.log(this.deposito);
        },
        (error) => {
          console.log(error);
        }
      )
  }


  add() {
    this.service.add(this.estantes)
      .subscribe(
        () => {
          this.returnToList();
        },
        (error) => {
          console.error(error)
        }
      )
  }

  update() {
    this.service.update(this.estantes)
      .subscribe(
        () => {
          this.returnToList();
        },
        (erro) => {
          console.error("Error al actualizar " + erro);
        }
      )
  }

  returnToList() {
    this.router.navigate([this.ruta]);
  }
}
