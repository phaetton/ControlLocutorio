import { Injectable } from '@angular/core';
import { Factura } from '../interfaces/facturas';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  factura: Factura[] = [];
  constructor(private firestore: Firestore) { }

  addfactura(factura: Factura) {
    const facturaRef = collection(this.firestore, 'factura');
    return addDoc(facturaRef, factura);
  }

  getfactura(): Observable<Factura[]> {
    const facturaRef = collection(this.firestore, 'factura');
    return collectionData(facturaRef, { idField: 'id' }) as Observable<Factura[]>;
  }

  deletefactura(factura: Factura) {
    const facturaRef = doc(this.firestore, `factura/${factura.id}`);
    return deleteDoc(facturaRef);
  }

}
