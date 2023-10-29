import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Productos } from '../interfaces/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productoGlobal: Productos[] = [];

  constructor(private firestore: Firestore) {
    this.getProductos().subscribe(m => this.productoGlobal = m);

  }

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
    return updateDoc(productoRef, {
      cantidad: producto.cantidad,
    });
  }

  quitarCantidadProducto(id?: string) {
    let indice = this.productoGlobal.findIndex(m => m.id == id);
    if (indice > -1) {
      this.productoGlobal[indice].cantidad! -= 1;
      this.updateProductos(this.productoGlobal[indice])
    }
  }

  agregarCantidadProducto(id?: string) {
    let indice = this.productoGlobal.findIndex(m => m.id == id);
    if (indice > -1) {
      this.productoGlobal[indice].cantidad! += 1;
      this.updateProductos(this.productoGlobal[indice])
    }
  }




}