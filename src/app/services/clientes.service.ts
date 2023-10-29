import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/cliente';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  cliente: Cliente[] = [];
  constructor(private firestore: Firestore) { }


  addCliente(cliente: Cliente) {
    const clienteRef = collection(this.firestore, 'Cliente');
    return addDoc(clienteRef, cliente);
  }

  getCliente(): Observable<Cliente[]> {
    const clienteRef = collection(this.firestore, 'Cliente');
    return collectionData(clienteRef, { idField: 'id' }) as Observable<Cliente[]>;
  }

  deleteCliente(cliente: Cliente) {
    const clienteRef = doc(this.firestore, `Cliente/${cliente.id}`);
    return deleteDoc(clienteRef);
  }



  // updateCliente(cliente: Cliente) {
  //   const clienteRef = doc(this.firestore, `Cliente/${cliente.id}`);
  //   return updateDoc(clienteRef, { cliente });
  // }


  // quitarCantidad(cliente:Cliente){
  // }

  // definecliente(x: Cliente[]) {
  //   this.clientex = x;
  // }

  // get gcliente() {
  //   return this.clientex;
  // }

  // quitarCantidad(id?: string) {
  //   let indice = this.clientex.findIndex(m => m.id == id);
  //   if (indice > -1) {
  //     this.clientex[indice].cantidad -= 1;
  //   }
  // }

  // agregarCantidad(id: string) {
  //   let indice = this.clientex.findIndex(m => m.id == id);
  //   if (indice > -1) {
  //     this.clientex[indice].cantidad += 1;
  //   }
  // }
  // }

}