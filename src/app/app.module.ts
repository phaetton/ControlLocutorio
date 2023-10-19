import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarCierreComponent } from './registrar-cierre/registrar-cierre.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { ListaregistrodiarioComponent } from './components/listaregistrodiario/listaregistrodiario.component';
import { ListarproductosComponent } from './components/listarproductos/listarproductos.component';
import { RegistrarproductoComponent } from './components/registrarproducto/registrarproducto.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RegistrarcategoriaComponent } from './components/registrarcategoria/registrarcategoria.component';
import { RegistrarsubcategoriaComponent } from './components/registrarsubcategoria/registrarsubcategoria.component';
import { ListarcompraComponent } from './components/listarcompra/listarcompra.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarCierreComponent,
    NavbarComponent,
    ListaregistrodiarioComponent,
    ListarproductosComponent,
    RegistrarproductoComponent,
    SidebarComponent,
    RegistrarcategoriaComponent,
    RegistrarsubcategoriaComponent,
    ListarcompraComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
