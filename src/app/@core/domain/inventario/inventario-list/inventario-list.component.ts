import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { environment } from 'src/environments/environment';
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
    this.getOtros();
  }

  getOtros(){
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

  delete(id: any) {
    this.confirmationService.confirm({
      message: 'Está seguro que desea eliminar?',
      accept: () => {
        this.service.delete(id)
          .subscribe(
            (res) => {
              this.getOtros();
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
