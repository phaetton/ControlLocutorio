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



}