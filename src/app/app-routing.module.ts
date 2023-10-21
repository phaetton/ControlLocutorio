import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrarcategoriaComponent } from './components/registrarcategoria/registrarcategoria.component';
import { RegistrarproductoComponent } from './components/registrarproducto/registrarproducto.component';
import { RegistrarsubcategoriaComponent } from './components/registrarsubcategoria/registrarsubcategoria.component';
import { ListarproductosComponent } from './components/listarproductos/listarproductos.component';
import { RegistrariconoComponent } from './components/registraricono/registraricono.component';

const routes: Routes = [
  {
    path: "", component: DashboardComponent,

    children: [
      { path: "", component: ListarproductosComponent },
      { path: "agregarcategoria", component: RegistrarcategoriaComponent },
      { path: "agregarproducto", component: RegistrarproductoComponent },
      { path: "agregarsubcategoria", component: RegistrarsubcategoriaComponent },
      { path: "agregaricono", component:RegistrariconoComponent },

      { path: "editarcategoria", component: RegistrarcategoriaComponent },
      { path: "editarproducto", component: ListarproductosComponent },
      { path: "editarsubcategoria", component: RegistrarsubcategoriaComponent },
      { path: "editaricono", component:RegistrariconoComponent },
    ]
  },
  { path: "**", component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
