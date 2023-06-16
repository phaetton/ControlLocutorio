import { Injectable } from '@angular/core';
import { Firestore, collection,addDoc } from '@angular/fire/firestore';
import { Registrodiario } from '../interfaces/registrodiario';

@Injectable({
  providedIn: 'root'
})
export class RegistrodiarioService {

  constructor(private firestore:Firestore) { }

  addRegistroDiario(registro:Registrodiario){
    const registroRef=collection(this.firestore,'registrodiario');
    return addDoc(registroRef,registro);
  }
}
