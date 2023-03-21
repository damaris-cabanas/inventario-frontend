import { Component, OnInit } from '@angular/core';
import { AbstractControl, Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../shared/services/validator.service';
import { UsuariosService } from '../usuario/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  stateOptions: any[] = [];
  formError:{[key:string]:string}={
    nombre:'',
    login:'',
    password:'',
    passwordRepetido:'',
    existe:'',
  }


  constructor(private userService:UsuariosService, private validatoForm:ValidatorService) {
    this.form = new FormGroup({});
   }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.form = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      login: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      password: new FormControl('', [Validators.required]),
      passwordRepetido: new FormControl('', [Validators.required]),
    });
  }

  enviarRegistro(event:Event){
    event.preventDefault();
     if(this.form.valid && !this.validarPasswordRepetido()){
        let value = this.form.value;
        delete value.passwordRepetido;
        Object.assign(value,{fecha_creacion:new Date()});
        this.userService.post(value).then(result => { console.log(result); this.buildForm();});
     }else{
       this.getFormErrors();
       this.validarPasswordRepetido()?this.formError.passwordRepetido = "Los passwords no son iguales":false;
       this.focusValidation();
     }
  }

  getFormErrors(){
    let result = this.validatoForm.getErrors(this.form);
    for(let v of result){
      this.formError[v.position]=v.msj;
    }
  }

  focusValidation(){
    for(let t in this.formError){
      if(this.formError[t] != '' && t != "password"){
        document.getElementById(t)?.focus();
        break;
      }
    }
  }

  validarPasswordRepetido(){
    if(this.form.get('password')?.value !== this.form.get('passwordRepetido')?.value 
    && this.formError.passwordRepetido == ''){
      return true;
    }
    return false;
  }

  vaciar(){
    this.buildForm();
  }

  existe(control: AbstractControl) {
    return this.userService.getUserByLogin(control.value).then((value) => {
      if(value!=null){
        return {'existe':true};
      }else{
        return null;
      }
     });
  }
}
