import { Injectable } from '@angular/core';
import { Iconos } from '../interfaces/iconos';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IconosService {

  constructor(private firestore: Firestore) { }

  addIconos(icono: Iconos) {
    const iconoRef = collection(this.firestore, 'Iconos');
    return addDoc(iconoRef, icono);
  }

  getIconos(): Observable<Iconos[]> {
    const iconoRef = collection(this.firestore, 'Iconos');
    return collectionData(iconoRef, { idField: 'id' }) as Observable<Iconos[]>;
  }

  deleteIconos(icono: Iconos) {
    const iconoRef = doc(this.firestore, `Iconos/${icono.id}`);
    return deleteDoc(iconoRef);
  }

}