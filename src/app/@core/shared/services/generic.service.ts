import { HttpClient } from '@angular/common/http';
import { Params } from '@angular/router';


export class GenericService<Model>{

  constructor(private readonly dir:string,private readonly _httpClient:HttpClient) {}

  url = 'http://10.4.210.99:3050/api/v1'

  async getMany(){
    return await this._httpClient.get<Array<Model>>(this.url+"/"+this.dir).toPromise();
  }

  async get(id:number){
    return await this._httpClient.get(this.url+"/"+this.dir+"/"+id).toPromise();
  }

  async post(obj:Model){
    return await this._httpClient.post<Model>(this.url+"/"+this.dir, obj).toPromise();
   }

  async put(obj:Model, id:number){
    return await this._httpClient.put<Model>(this.url+"/"+this.dir+"/"+id, obj).toPromise();
  }

  async delete(id:number){
    return await this._httpClient.delete(this.url+"/"+this.dir+"/"+id).toPromise();
  }

  async getUserByLogin(login:string){
    return await this._httpClient.post(this.url+"/usuarios/verifyUser",{login:login}).toPromise();
  }

  async getPerFilter(params?:Params){
    return await this._httpClient.get<Array<Model>>(this.url+"/"+this.dir+"/getPerFilter", {params: params}).toPromise();
  }

  async countRepository(params?:Params){
    return await this._httpClient.get<number>(this.url+"/"+this.dir+"/count", {params: params}).toPromise();
  }
}
