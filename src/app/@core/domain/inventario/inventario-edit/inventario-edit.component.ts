import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { getStatusDescription, Status } from '../../enums/status.enums';
import { Inventario } from '../inventario.model';
import { InventarioService } from '../inventario.service';
import {getPrestadoDescription, Prestado} from "../../enums/prestado.enum";
import {getLugarActualDescription, LugarActual} from "../../enums/lugar-actual.enum";
import {Clasificacion, getClasificacionDescription} from "../../enums/clasificacion.enum";


@Component({
  selector: 'app-inventario-edit',
  templateUrl: './inventario-edit.component.html',
  styleUrls: ['./inventario-edit.component.css']
})
export class InventarioEditComponent implements OnInit {

  inventarios = new Inventario();

  isModoEdicion: boolean = false;

  estados = Object.values(Status).map(value => ({ label: getStatusDescription(value), value: value}));
  prestados = Object.values(Prestado).map(value => ({ label: getPrestadoDescription(value), value: value}));
  // lugaractual = Object.values(LugarActual).map(value => ({ label: getLugarActualDescription(value), value: value}));
  clasificaciones = Object.values(Clasificacion).map(value => ({ label: getClasificacionDescription(value), value: value}));

  displayDialog: boolean = false;

  submitted: boolean | undefined;

  ruta = "/inventario";

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: InventarioService,
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
                (inventario) => {
                  this.inventarios = inventario;
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
    this.service.add(this.inventarios)
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
    this.service.update(this.inventarios)
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
