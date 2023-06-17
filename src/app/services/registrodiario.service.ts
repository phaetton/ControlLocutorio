import { Injectable } from '@angular/core';
import { Firestore, collection,addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Registrodiario } from '../interfaces/registrodiario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrodiarioService {

  constructor(private firestore:Firestore) { }

  addRegistroDiario(registro:Registrodiario){
    const registroRef=collection(this.firestore,'registrodiario');
    return addDoc(registroRef,registro);
  }

  getRegistroDiario():Observable<Registrodiario[]>{
    const registroRef=collection(this.firestore,'registrodiario');
    return collectionData(registroRef,{idField:'id'}) as Observable<Registrodiario[]> ;
  }

  deleteRegistroDiario(registro:Registrodiario){
    const registroRef=doc(this.firestore,`registros/${registro.id}`);
    return deleteDoc(registroRef);
  }
}
