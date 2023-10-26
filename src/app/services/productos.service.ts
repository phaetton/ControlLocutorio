import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Productos } from '../interfaces/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productox: Productos[] = [];
  constructor(private firestore: Firestore) { }

  addProductos(producto: Productos) {
    const productoRef = collection(this.firestore, 'Productos');
    return addDoc(productoRef, producto);
  }

  getProductos(): Observable<Productos[]> {
    const productoRef = collection(this.firestore, 'Productos');
    return collectionData(productoRef, { idField: 'id' }) as Observable<Productos[]>;
  }

  deleteProductos(producto: Productos) {
    const productoRef = doc(this.firestore, `Productos/${producto.id}`);
    return deleteDoc(productoRef);
  }



  updateProductos(producto: Productos) {
     const productoRef = doc(this.firestore, `Productos/${producto.id}`);
     return updateDoc(productoRef, { producto });
   }


  // quitarCantidad(producto:Productos){
  // }

  defineProducto(x: Productos[]) {
    this.productox = x;
  }

  get gProducto() {
    return this.productox;
  }

  quitarCantidad(id?: string) {
    let indice = this.productox.findIndex(m => m.id == id);
    if (indice > -1) {
      this.productox[indice].cantidad -= 1;
    }



  }

  agregarCantidad(id: string) {
    let indice = this.productox.findIndex(m => m.id == id);
    if (indice > -1) {
      this.productox[indice].cantidad += 1;
    }
  }
}