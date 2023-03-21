import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Inventario } from './inventario.model';

@Injectable({
  providedIn: 'root',
})
export class InventarioService {
  private url = `${environment.URL_API}/inventario/`;

  inventarios: Inventario;

  constructor(private http: HttpClient) {
    this.inventarios = new Inventario();
  }
  //Todos los estantes
  getAll() {
    return this.http.get<Inventario[]>(this.url);
  }

  //Se obtiene por id de Inventario
  getByIdInventarios(inventarioId: number) {
    return this.http.get<Inventario[]>(
      this.url + '/api/v1/inventario/' + inventarioId
    );
  }

  getByIdInventario(inventarioId: number){
    return this.http.get<Inventario[]>(this.url + 'inventario/' + inventarioId);
  }

  //Se obtiene por id
  getById(id: any) {
    return this.http.get<Inventario>(this.url + id);
  }

  //Crear
  add(inventario: Inventario) {
    return this.http.post<Inventario>(this.url, inventario);
  }

  //Modificar
  update(inventarios: Inventario) {
    return this.http.put<Inventario>(this.url + inventarios.id, inventarios);
  }

  delete(id: any) {
    return this.http.delete(this.url + id);
  }

}
