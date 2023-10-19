import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrarcategoriaComponent } from './components/registrarcategoria/registrarcategoria.component';
import { RegistrarproductoComponent } from './components/registrarproducto/registrarproducto.component';
import { RegistrarsubcategoriaComponent } from './components/registrarsubcategoria/registrarsubcategoria.component';

const routes: Routes = [
  {path:"",component:DashboardComponent},
  {path:"agregarcategoria",component:RegistrarcategoriaComponent},
  {path:"agregarproducto",component:RegistrarproductoComponent},
  {path:"agregarsubcategoria",component:RegistrarsubcategoriaComponent},
  {path:"**",component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
