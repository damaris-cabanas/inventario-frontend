import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../../domain/usuario/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api = environment.URL_API;

  user!: Usuario;

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  async login(user: Usuario){
    this.user = user;
    return await this.httpClient.post(this.api+"/login" , user).toPromise().then(result => this.storage(result));
  }

  storage(result:any){
    console.log(result);
    this.setLogin(this.user);
    localStorage.setItem('access_token',result.access_token);
    this.router.navigate(['computadora']);
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  setLogin(user: Usuario){
    localStorage.setItem('login',user.login);
  }

  getLogin(){
    return localStorage.getItem('login');
  }

  userLogged(): Boolean{
    return !!localStorage.getItem('access_token');
  }

  async logout(){
    localStorage.removeItem('access_token');
    window.location.reload();
    this.router.navigate(['/login']);
  }

}
