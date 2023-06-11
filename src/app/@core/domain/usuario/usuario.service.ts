import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChangeUser } from '../../domain/usuario/changeUser.model';
import { Usuario } from '../../domain/usuario/usuario.model';
import { GenericService } from '../../shared/services/generic.service';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService extends GenericService<Usuario>{

  constructor(private readonly httpClient:HttpClient) {
    super("user", httpClient);
  }

   url= 'http://10.4.210.99:3050/api/v1'

  async changePassword(user:ChangeUser){
    return await this.httpClient.post(this.url+"/user/changePassword", user).toPromise();
  }

  async getUserByLogin(login:string){
    return await this.httpClient.post(this.url+"/user/verifyUser",{login:login}).toPromise();
  }
}
