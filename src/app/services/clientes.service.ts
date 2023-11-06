import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/cliente';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, updateDoc } from '@angular/fire/firestore';
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

  updateClientes(cliente: Cliente, id?: string) {
    const clienteRef = doc(this.firestore, `Cliente/${id}`);
    return updateDoc(clienteRef, { ...cliente });
  }
  // cantidad: cliente.cantidad,
  // nombre:cliente.nombre,
  // categoria:cliente.categoria,
  // subcategoria:cliente.subcategoria,
  // precio:cliente.precio
}