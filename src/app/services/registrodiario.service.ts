import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, UpdateData, updateDoc } from '@angular/fire/firestore';
import { Registrodiario } from '../interfaces/registrodiario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrodiarioService {

  constructor(private firestore: Firestore) { }

  addRegistroDiario(registro: Registrodiario) {
    const registroRef = collection(this.firestore, 'registrodiario');
    return addDoc(registroRef, registro);
  }

  getRegistroDiario(): Observable<Registrodiario[]> {
    const registroRef = collection(this.firestore, 'registrodiario');
    return collectionData(registroRef, { idField: 'id' }) as Observable<Registrodiario[]>;
  }

  deleteRegistroDiario(registro: Registrodiario) {
    const registroRef = doc(this.firestore, `registrodiario/${registro.id}`);
    return deleteDoc(registroRef);
  }

  // updateRegistroDiario(registro: Registrodiario) {


  //   registro.centimo1 = 44;
  //   registro.centimo2 = 44;
  //   registro.centimo5 = 44;
  //   registro.centimo10 = 44;
  //   registro.centimo20 = 44;
  //   registro.centimo50 = 44;
  //   registro.euro1 = 44;
  //   registro.euro2 = 44;
  //   registro.euro5 = 44;
  //   registro.euro10 = 44;
  //   registro.euro20 = 44;
  //   registro.euro50 = 44;
  //   registro.euro100 = 44;
  //   registro.papel = 44;
  //   registro.bari = 44;
  //   registro.bare = 44;
  //   registro.barpre = 44;
  //   registro.barco = 44;
  //   registro.jefei = 44;
  //   registro.jefee = 44;
  //   registro.compra = 44;
  //   const registroRef = doc(this.firestore, `registrodiario/${registro.id}`);
  //   return updateDoc(registroRef, { registro });
  // }
}
