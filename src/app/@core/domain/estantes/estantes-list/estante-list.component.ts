import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { Estante } from '../estantes.model';
import { EstanteService } from '../estantes.service';

@Component({
  selector: 'app-estante-list',
  templateUrl: './estante-list.component.html',
  styleUrls: ['./estante-list.component.css']
})
export class EstanteListComponent implements OnInit {

  estantes: Estante[] = [];

  display: boolean = false;

  private url = `${environment.URL_API}/estante`;

  constructor(
    private service: EstanteService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getEstante();
  }

  getEstante(){
    this.service.getAll()
      .subscribe(
        (res) => {
          this.estantes = res;
          console.log(this.estantes);
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
              this.getEstante();
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

