import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './@core/domain/login/login.component';
import { SettingComponent } from './@core/domain/setting/setting.component';
import { UsuarioComponent } from './@core/domain/usuario/usuario-list/usuario.component';

const routes: Routes = [

//   { path: 'login', component: LoginComponent},

  { path: 'setting', component: SettingComponent},
  { path: 'usuarios', component: UsuarioComponent},

   { path: 'deposito', loadChildren: async () =>
       (await import('./@core/domain/deposito/deposito.module')).DepositoModule,
   },

  { path: 'estante',  loadChildren: async () =>
      (await import('./@core/domain/estantes/estantes.module')).EstanteModule,
  },

  { path: 'mercaderia', loadChildren: async () =>
      (await import('./@core/domain/mercaderia/mercaderia.module')).MercaderiaModule,
  },

  { path: 'inventario', loadChildren: async () =>
  (await import('./@core/domain/inventario/inventario.module')).InventarioModule,
  },

  { path: 'otros', loadChildren: async () =>
  (await import('./@core/domain/otros/otros.module')).OtrosModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
