import { HttpClient } from '@angular/common/http';


export class GenericService<Model>{

  constructor(private readonly dir:string,private readonly _httpClient:HttpClient) {}

  url = 'http://localhost:3000/api/v1'

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

}
