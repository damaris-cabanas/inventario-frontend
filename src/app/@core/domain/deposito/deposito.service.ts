import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Deposito } from './deposito.model';

@Injectable({
  providedIn: 'root',
})
export class DepositoService {
  private url = `${environment.URL_API}/deposito/`;

  depositos: Deposito;

  constructor(private http: HttpClient) {
    this.depositos = new Deposito();
  }
  //Todos los estantes
  getAll() {
    return this.http.get<Deposito[]>(this.url);
  }

  //Se obtiene por id de Deposito
  getByIdDepositos(depositoId: number) {
    return this.http.get<Deposito[]>(
      this.url + '/api/v1/deposito/' + depositoId
    );
  }


  //Se obtiene por id
  getById(id: any) {
    return this.http.get<Deposito>(this.url + id);
  }

  //Crear
  add(deposito: Deposito) {
    return this.http.post<Deposito>(this.url, deposito);
  }

  //Modificar
  update(deposito: Deposito) {
    return this.http.put<Deposito>(this.url + deposito.id, deposito);
  }

  delete(id: any) {
    return this.http.delete(this.url + id);
  }

}
