import { Component } from '@angular/core';
import { Listacompra } from 'src/app/interfaces/listacompra';
import { Productos } from 'src/app/interfaces/productos';
import { ListacompraService } from 'src/app/services/listacompra.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-listarcompra',
  templateUrl: './listarcompra.component.html',
  styleUrls: ['./listarcompra.component.scss']
})
export class ListarcompraComponent {
 listacompras: Listacompra[] ;
  totalcompra: number ;
  cantidadTotal:number=0;
  descuento:number=0;
  productos:Productos[]=[];
  
  constructor(private listacomprasvc: ListacompraService,private productossvc:ProductosService) {
    this.listacompras= this.listacomprasvc.listacompras;
    this.totalcompra = this.listacomprasvc.totalcompra;
  }

  ngOnInit() {
    this.productos=this.productossvc.

  }

  calculartotalcompra() {
    this.cantidadTotal= this.listacompras.reduce((acumulador, producto) => acumulador + producto.cantidadCompra, 0);
    return  this.listacompras.reduce((acumulador, producto) => acumulador + (producto.precio * producto.cantidadCompra), 0);
  }

  quitar(id:string){
   this.listacomprasvc.quitarCantidad(id);
   this.agregarCantidad(id);
  }


  // onAgregarCarrito(producto: Productos) {
  
  //   this.quitarCantidad(producto.id);
  //   this.listacomprasvc.agregarALista(producto);
  //   }
  
   

     agregarCantidad(id: string) {
    let indice = this.productos.findIndex(m => m.id == id);
    if (indice > -1) {
      this.productos[indice].cantidad += 1;
    }
  }

  facturar(){
    
  }


}
