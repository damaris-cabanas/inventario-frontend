import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { Clasificacion } from '../../enums/clasificacion.enum';
import { Status } from '../../enums/status.enums';
import { Inventario } from '../inventario.model';
import { InventarioService } from '../inventario.service';

@Component({
  selector: 'app-inventario-list',
  templateUrl: './inventario-list.component.html',
  styleUrls: ['./inventario-list.component.css']
})
export class InventarioListComponent implements OnInit {

  inventarios: Inventario[] = [];

  display: boolean = false;

  private url = `${environment.URL_API}/inventario`;

  constructor(
    private service: InventarioService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getInventario();
  }

  getInventario(){
    this.service.getAll()
      .subscribe(
        (res) => {
          this.inventarios = res;
          console.log(this.inventarios);
        },
        (err) => {
          console.error(err);
        }
      )
  }

  getEventValue(event: any){
    return (event.target as HTMLInputElement).value;
  }

  getStyleStatus(value: Status) {
    switch(value){
      case 'OK':
        return {'background-color': '#C8E6C9', color:  '#256029' };

      case 'REP':
        return {'background-color': '#DAB6FC', color:  '#572586' };

      case 'AVE':
        return {'background-color': '#FFCDD2', color:  '#c63737' };

      case 'MAN':
        return {'background-color': '#C8DDFE', color:  '#2457C5' };

      default:
        return {'background-color': '#C8E6C9', color:  '#256029' };
    }
  }

  getStyleClasificacion(value: Clasificacion) {
    switch(value){
      case 'EL':
        return {'background-color': '#C8E6C9', color:  '#256029' };

      case 'KD':
        return {'background-color': '#DAB6FC', color:  '#572586' };

      case 'HE':
        return {'background-color': '#FFCDD2', color:  '#c63737' };

      case 'SE':
        return {'background-color': '#C8DDFE', color:  '#2457C5' };

      default:
        return {'background-color': '#C8E6C9', color:  '#256029' };
    }
  }

  delete(id: any) {
    this.confirmationService.confirm({
      message: 'Está seguro que desea eliminar?',
      accept: () => {
        this.service.delete(id)
          .subscribe(
            (res) => {
              this.getInventario();
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
