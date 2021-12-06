import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from '../usuario.model';
import { TipoUser } from '../../../enum/tipo_user.enum';
import { UsuariosService } from '../usuario.service';
import { NuevoUsuarioComponent } from '../../nuevo-usuario/nuevo-usuario.component';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  // @ViewChild(NuevoUsuarioComponent) user!:NuevoUsuarioComponent;
  // interval:any;
  // listaUsuarios!:Usuario[];
  // usuario!:Usuario;
  // titleModal!:string;
  // totalRecords!:number;
  // skip:number=0;
  // take:number = 5;
  // filter:any = {};
  // displayInfo:boolean=false;
  // displayNuevoUsuario:boolean=false;
  // condicionesBusqueda=[
  //     {tipo_usuario:"select", enum:Object.values(TipoUser)},
  //     {fecha_creacion:"date"},
  //     {fecha_alteracion:"date"},
  //     {writes:["nombre","login","descripcion"]},
      
  // ];

  // constructor(private usuariosServ:UsuariosService) { }

  ngOnInit(): void {
    // this.getUsuarios(this.skip,this.take,this.filter);
  }


  // getUsuarios(skip:number,take:number,event:any){
  //     this.usuariosServ.getPerFilter({skip:skip, take:take, obj:JSON.stringify(event)}).then(result => {this.listaUsuarios = result});
  //     this.countRep(event);
  // }

  // countRep(event:any){
  //   this.usuariosServ.countRepository({obj:JSON.stringify(event)}).then(result=> {this.totalRecords=result});
  // }

  // onPageChange(event:any){
  //   this.skip = event.first;
  //   this.getUsuarios(this.skip,this.take,this.filter);
  // }

  // displayState(state:string, item:any){
  //   state == 'nuevo' ? this.user.defineState('nuevo', item):this.user.defineState('editar', item);
  //   this.titleModal = state == 'nuevo'? 'Nuevo Usuario':'Editar Usuario';
  //   this.displayNuevoUsuario=true;
  // }

  // reloadPage(){
  //   this.getUsuarios(this.skip,this.take,this.filter);
  // }

  // eliminarItem(item:Usuario){
  //   this.usuariosServ.delete(item.id).then(result =>{this.reloadPage()});
  // }

  // resultadoBusqueda(event:any){
  //   this.filter=event;
  //   this.getUsuarios(0,this.take,this.filter);
  // }

}
