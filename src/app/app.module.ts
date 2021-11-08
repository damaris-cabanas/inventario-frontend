import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ConfirmationService, MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DepositoModule } from './@core/domain/deposito/deposito.module';
import { EstantesModule } from './@core/domain/estantes/estantes.module';
import { MercaderiaModule } from './@core/domain/mercaderia/mercaderia.module';
import { SharedModule } from './@core/shared/shared.module';
import { LoginComponent } from './@core/domain/login/login.component';
import { RegisterComponent } from './@core/domain/register/register.component';
import { DashboardComponent } from './@core/domain/dashboard/dashboard.component';
import { SettingComponent } from './@core/domain/setting/setting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenuModule} from 'primeng/menu';
import {PasswordModule} from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { ChangePasswordComponent } from './@core/domain/setting/change-password/change-password.component';
import { InterceptorService } from './@core/shared/services/interceptor.service';

@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent, 
    RegisterComponent, 
    DashboardComponent, 
    SettingComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    ButtonModule,
    CardModule,
    ToastModule,
    BrowserAnimationsModule,
    SelectButtonModule,
    PasswordModule,
    BrowserModule,
    FormsModule,
    InputTextModule,
    TooltipModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    DepositoModule,
    EstantesModule,
    MercaderiaModule,
    SharedModule,
    MenuModule
  ],
  bootstrap: [AppComponent],
  providers: [MessageService, ConfirmationService,
    { provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true }
  ],
})
export class AppModule { }
