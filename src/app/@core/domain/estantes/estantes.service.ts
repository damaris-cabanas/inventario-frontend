import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Deposito } from '../deposito/deposito.model';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Estante } from './estantes.model';

@Injectable({
  providedIn: 'root',
})
export class EstanteService {
  private url = `${environment.URL_API}/estante/`;

  deposito!: Deposito;
  estantes: Estante;

  constructor(private http: HttpClient) {
    this.estantes = new Estante();
  }
  //Todos los estantes
  getAll() {
    return this.http.get<Estante[]>(this.url);
  }

  //Se obtiene por id de Deposito
  getByIdDeposito(depositoId: number) {
    return this.http.get<Deposito[]>(
      this.url + '/api/v1/deposito/' + depositoId
    );
  }

  getByIdEstantes(estantesId: number){
    return this.http.get<Estante[]>(this.url + 'estantes/' + estantesId);
  }

  //Se obtiene por id
  getById(id: any) {
    return this.http.get<Estante>(this.url + id);
  }

  //Crear
  add(estantes: Estante) {
    return this.http.post<Estante>(this.url, estantes);
  }

  //Modificar
  update(estantes: Estante) {
    return this.http.put<Estante>(this.url + estantes.id, estantes);
  }

  delete(id: any) {
    return this.http.delete(this.url + id);
  }

}
