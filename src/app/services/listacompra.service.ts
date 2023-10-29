import { Injectable } from '@angular/core';
import { Listacompra } from '../interfaces/listacompra';
import { Productos } from '../interfaces/productos';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListacompraService {
  listacompras: Listacompra[] = [];
  totalcompra: number = 0;

  constructor(private firestore: Firestore) {
    this.getListacompra().subscribe(m => this.listacompras = m)
  }


  addListacompra(listacompra: Listacompra) {
    const listacompraRef = collection(this.firestore, 'Listacompra');
    return addDoc(listacompraRef, listacompra);
  }

  getListacompra(): Observable<Listacompra[]> {
    const listacompraRef = collection(this.firestore, 'Listacompra');
    return collectionData(listacompraRef, { idField: 'id' }) as Observable<Listacompra[]>;
  }

  deleteListacompra(listacompra: Listacompra) {
    const listacompraRef = doc(this.firestore, `Listacompra/${listacompra.id}`);
    return deleteDoc(listacompraRef);
  }

  updateListaCompra(listacompra: Listacompra) {
    const listacompraRef = doc(this.firestore, `Listacompra/${listacompra.id}`);
    return updateDoc(listacompraRef, {
      cantidadCompra: listacompra.cantidadCompra
    });
  }



  agregarAListaCompra(producto: Productos) {
    let indice: number = 0;
    if (this.listacompras.length == 0) {
      this.addListacompra({ producto: producto, cantidadCompra: 1 })
    } else {
      indice = this.listacompras.findIndex(m => m.producto.id == producto.id);
      if (indice > -1) {
        this.listacompras[indice].cantidadCompra += 1;
        this.updateListaCompra(this.listacompras[indice])
      } else {
        this.addListacompra({ producto: producto, cantidadCompra: 1 })
      }
    }


  }



  quitarCantidadListaCompra(listacompra: Listacompra) {
    let indice = this.listacompras.findIndex(m => m.id == listacompra.id);
    if (indice > -1) {
      if (this.listacompras[indice].cantidadCompra == 1) {
        this.deleteListacompra(listacompra)
      } else {
        this.listacompras[indice].cantidadCompra -= 1;
        this.updateListaCompra(this.listacompras[indice])

      }
    }
  }


  
  

 
}
