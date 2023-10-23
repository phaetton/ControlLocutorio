import { Injectable } from '@angular/core';
import { Listacompra } from '../interfaces/listacompra';

@Injectable({
  providedIn: 'root'
})
export class ListacompraService {
  listacompras: Listacompra[] = [
    // { "id": 8, "nombre": "Sarten", "precio": 20, "cantidad": 2, "img": "../assets/productos/sarten.jpg" }, { "id": 3, "nombre": "Molde", "precio": 30, "cantidad": 1, "img": "../assets/productos/relleno (1).jpg" }, { "id": 1, "nombre": "Paila", "precio": 10, "cantidad": 3, "img": "../assets/productos/pailacontapa.jpg" } 
  ]
  totalcompra: number = 0;

  constructor() { }

  onTotalCompra() {
    //  this.totalcompra = this.listacompras.reduce((total, valor) => total + valor.precio, 0);
  }

  agregarALista(producto: Listacompra) {
    let indice = this.listacompras.findIndex(m => m.id == producto.id);
    if (indice > -1) {
      this.listacompras[indice].cantidad += 1;
    } else {
      this.listacompras.push(producto);
    }
  }

  quitarCantidad(id: number) {
    let indice = this.listacompras.findIndex(m => m.id?'333' :'');
    if (indice > -1) {

      this.listacompras[indice].cantidad == 1 ? this.listacompras.splice(indice, 1) : this.listacompras[indice].cantidad -= 1;

    }
  }
}
