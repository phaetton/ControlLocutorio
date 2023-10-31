import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrarcategoriaComponent } from './components/registrarcategoria/registrarcategoria.component';
import { RegistrarproductoComponent } from './components/registrarproducto/registrarproducto.component';
import { RegistrarsubcategoriaComponent } from './components/registrarsubcategoria/registrarsubcategoria.component';
import { ListarproductosComponent } from './components/listarproductos/listarproductos.component';
import { RegistrariconoComponent } from './components/registraricono/registraricono.component';
import { FacturarComponent } from './components/facturar/facturar.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: 'home' },
  {
    path: "home", component: DashboardComponent, children: [
      { path: "", component: ListarproductosComponent },
      {
        path: "categoria/:categoria", component: ListarproductosComponent, children: [
          { path: "subcategoria/:subcategoria", component: ListarproductosComponent },
        ]
      },
      { path: "agregarcategoria", component: RegistrarcategoriaComponent },
      { path: "agregarproducto", component: RegistrarproductoComponent },
      { path: "agregarsubcategoria", component: RegistrarsubcategoriaComponent },

      { path: "editarcategoria", component: RegistrarcategoriaComponent },
      { path: "editarproducto", component: ListarproductosComponent },
      { path: "editarsubcategoria", component: RegistrarsubcategoriaComponent },
    ]
  },
  { path: "agregaricono", component: RegistrariconoComponent },
  { path: "facturar/:descuento", component: FacturarComponent },

  { path: "**", pathMatch:'full', redirectTo:"/home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
