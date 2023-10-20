import { Injectable } from '@angular/core';
import { Subcategorias } from '../interfaces/subcategorias';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriasService {

  constructor(private firestore: Firestore) { }

  addSubcategorias(subcategoria: Subcategorias) {
    const subcategoriaRef = collection(this.firestore, 'Subcategorias');
    return addDoc(subcategoriaRef, subcategoria);
  }

  getSubcategorias(): Observable<Subcategorias[]> {
    const subcategoriaRef = collection(this.firestore, 'Subcategorias');
    return collectionData(subcategoriaRef, { idField: 'id' }) as Observable<Subcategorias[]>;
  }

  deleteSubcategorias(subcategoria: Subcategorias) {
    const subcategoriaRef = doc(this.firestore, `Subcategorias/${subcategoria.id}`);
    return deleteDoc(subcategoriaRef);
  }

  updateSubcategorias(subcategoria: Subcategorias) {
    const subcategoriaRef = doc(this.firestore, `Subcategorias/LM3mlkwoxabQh1ssyHzh`);
    return updateDoc(subcategoriaRef, { subcategoria });
  }
}