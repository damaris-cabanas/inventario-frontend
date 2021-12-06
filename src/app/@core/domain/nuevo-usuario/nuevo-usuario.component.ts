import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { TipoUser } from '../../enum/tipo_user.enum';
import { ValidatorService } from '../../shared/services/validator.service';
import { Usuario } from '../usuario/usuario.model';
import { UsuariosService } from '../usuario/usuario.service';


@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {
  // @Output() reloadPage = new EventEmitter<any>();

  // form: FormGroup;
  // stateOptions: any[] = [];
  // usuarioNuevo: Usuario = new Usuario();
  // state!: string;
  // formError: { [key: string]: string; } = {
  //   nombre: '',
  //   login: '',
  //   descripcion: '',
  //   existe: ''
  // };

  // constructor(private validatorForm: ValidatorService, private usuarioServ: UsuariosService) {
  //   this.form = new FormGroup({});
  //   this.stateOptions = this.getTipoUser();
  // }

  ngOnInit(): void {
    // this.buildForm();
  }

  // defineState(state: string, item: Usuario) {
  //   this.state = state;
  //   state == 'editar' ? this.usuarioNuevo = item : this.usuarioNuevo = new Usuario();
  //   this.buildForm();
  // }

  // private buildForm() {
  //   this.form = new FormGroup({
  //     nombre: new FormControl(this.usuarioNuevo.nombre, [Validators.required, Validators.maxLength(10)]),
  //     login: new FormControl(this.usuarioNuevo.login, [Validators.required, Validators.maxLength(10)], [this.existe.bind(this)]),
  //     descripcion: new FormControl(this.usuarioNuevo.descripcion, [Validators.required, Validators.maxLength(10)]),
  //     tipo_user: new FormControl(this.usuarioNuevo.tipo_user ? this.usuarioNuevo.tipo_user : this.getTipoUser()[0].value, []),
  //   });
  //   this.formErrorClean();
  // }

  // enviarRegistro(event: Event) {
  //   event.preventDefault();
  //   if (this.form.valid) {
  //     let value = this.form.value;
  //     if (this.state == 'nuevo') {
  //       Object.assign(value, { fecha_creacion: new Date() });
  //       Object.assign(value, { password: value.login });
  //       this.usuarioServ.post(value).then(result => { this.vaciar(), this.reloadPage.emit(); });
  //     } else {
  //       Object.assign(value, { fecha_alteracion: new Date() });
  //       this.usuarioServ.put(value, this.usuarioNuevo.id).then(result => { this.reloadPage.emit(); });
  //     }
  //   } else {
  //     this.getFormErrors();
  //     this.focusValidation();
  //   }
  // }

  // getFormErrors() {
  //   let result = this.validatorForm.getErrors(this.form);
  //   for (let v of result) {
  //     this.formError[v.position] = v.msj;
  //   }
  // }

  // formErrorClean() {
  //   for (let key in this.formError) {
  //     this.formError[key] = "";
  //   }
  // }

  // focusValidation() {
  //   for (let t in this.formError) {
  //     if (this.formError[t] != '') {
  //       document.getElementById(t)?.focus();
  //       break;
  //     }
  //   }
  // }

  // getTipoUser() {
  //   let Tipo = Object.keys(TipoUser);
  //   let dispOptions = new Array();
  //   for (let T of Tipo) {
  //     dispOptions.push({ name: T, value: T });
  //   }
  //   return dispOptions;
  // }

  // existe(control: AbstractControl) {
  //   return this.usuarioServ.getUserByLogin(control.value).then((value) => {
  //     if (value != null) {
  //       return { 'existe': true };
  //     } else {
  //       return null;
  //     }
  //   });
  // }

  // vaciar() {
  //   this.usuarioNuevo = new Usuario();
  //   this.buildForm();
  // }
}
