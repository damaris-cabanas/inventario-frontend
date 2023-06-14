import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/@core/shared/services/auth.service';
import { ValidatorService } from 'src/app/@core/shared/services/validator.service';
import { UsuariosService } from '../../usuario/usuario.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  formCambiar: UntypedFormGroup;
  formError:{ [key:string]:string } = {
    password:'',
    new_password:''
  }

  constructor(
    private userService:UsuariosService, 
    private validatoForm:ValidatorService, 
    private auth:AuthService
  ) { 
    this.formCambiar = new UntypedFormGroup({});
  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.formCambiar = new UntypedFormGroup({
      password: new UntypedFormControl('', [Validators.required]),
      new_password: new UntypedFormControl('', [Validators.required])
    });
  }

  enviarRegistro(event:Event){
    event.preventDefault();
     if(this.formCambiar.valid){
        let value = this.formCambiar.value;
        Object.assign(value,{login:this.auth.getLogin()});
        this.userService.changePassword(value).then(result => this.buildForm()).catch(error => {console.log("login o password equivocados");this.buildForm();});
     }else{
       this.getFormErrors();
       this.focusValidation();
     }
  }


  getFormErrors(){
    let result = this.validatoForm.getErrors(this.formCambiar);
    for(let v of result){
      this.formError[v.position]=v.msj;
    }
  }

  focusValidation(){
    for(let t in this.formError){
      if(this.formError[t] != ''){
        document.getElementById(t)?.focus();
        break;
      }
    }
  }

}
