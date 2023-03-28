import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Deposito } from '../deposito.model';
import { switchMap, tap } from 'rxjs/operators';
import { DepositoService } from '../deposito.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { getStatusDescription, Status } from '../../enums/status.enums';

@Component({
  selector: 'app-deposito-edit',
  templateUrl: './deposito-edit.component.html',
  styleUrls: ['./deposito-edit.component.css'],
})
export class DepositoEditComponent implements OnInit {
 
  depositos = new Deposito();

  isModoEdicion: boolean = false;

  estados = Object.values(Status).map(value => ({ label: getStatusDescription(value), value: value}));

  displayDialog: boolean = false;

  submitted: boolean | undefined;

  ruta = "/deposito";

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: DepositoService,
    private confirmationService: ConfirmationService

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
                (deposito) => {
                  this.depositos = deposito;
                },
                (error) => {
                  console.log("error al cargar " + error);
                }
              )
          }
        }
      )
  }

  add() {
    this.service.add(this.depositos)
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
    this.service.update(this.depositos)
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
