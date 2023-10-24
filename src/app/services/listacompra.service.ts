import { Injectable } from '@angular/core';
import { Listacompra } from '../interfaces/listacompra';
import { Productos } from '../interfaces/productos';

@Injectable({
  providedIn: 'root'
})
export class ListacompraService {
  listacompras: Listacompra[] = [
  ]
  totalcompra: number = 0;

  constructor() { }



  agregarALista(producto: Productos) {
    let productoCompra : Listacompra;
    let indice = this.listacompras.findIndex(m => m.id == producto.id);
    if (indice > -1) {
      this.listacompras[indice].cantidadCompra += 1;
    } else {
      productoCompra={...producto, cantidadCompra:1};
      this.listacompras.push(productoCompra);
    }

  }

  quitarCantidad(id: string) {
    let indice = this.listacompras.findIndex(m => m.id?id :'');
    if (indice > -1) {
      this.listacompras[indice].cantidadCompra == 1 ? this.listacompras.splice(indice, 1) : this.listacompras[indice].cantidadCompra -= 1;

    }
  }
}
