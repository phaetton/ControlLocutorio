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
  listacompras: Listacompra[] = [];
  totalcompra: number = 0;
  cantidadTotal: number = 0;
  descuento: number = 0;


  constructor(private listacomprasvc: ListacompraService, private productossvc: ProductosService) {
    this.listacomprasvc.getListacompra().subscribe(m => this.listacompras = m)

    this.totalcompra = this.listacomprasvc.totalcompra;
  }

  ngOnInit() {

  }

  calculartotalcompra() {
     return this.listacompras.reduce((acumulador, listacompra) => acumulador + (listacompra.producto.precio * listacompra.cantidadCompra), 0);
  }


  calcularCantidadcompra() {
     return this.listacompras.reduce((acumulador, listacompra) => acumulador + listacompra.cantidadCompra, 0);
  }

 

  onQuitarCarrito(listacompra: Listacompra) {
    this.productossvc.agregarCantidadProducto(listacompra.producto.id);
    this.listacomprasvc.quitarCantidadListaCompra(listacompra);
  }


  // onAgregarCarrito(producto: Productos) {
  //   this.productossvc.quitarCantidadProducto(producto.id);
  //   this.listacomprasvc.agregarAListaCompra(producto);
  // }



  // agregarCantidad(id: string) {
  //   this.productossvc.agregarCantidad(id);


   //   let indice = this.listacompras.findIndex(m => m.producto.id == id);
  //   // this.listacompras[indice].producto.cantidad += this.listacompras[indice].cantidadCompra;
  //   this.productossvc.agregarCantidadProducto(this.listacompras[indice].producto);
  //   this.productossvc.updateProductos(this.listacompras[indice].producto)
  //   if (this.listacompras[indice].cantidadCompra > 1) {
  //     this.listacompras[indice].cantidadCompra -= 1;
  //     this.listacomprasvc.updateListaCompra(this.listacompras[indice])
  //   } else {
  //     this.listacomprasvc.deleteListacompra(this.listacompras[indice]);
  //   }
  // }



  
  facturar() {

  }


}
