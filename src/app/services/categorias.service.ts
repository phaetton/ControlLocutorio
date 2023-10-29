import { Injectable } from '@angular/core';
import { Categorias } from '../interfaces/categorias';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IconosService } from './iconos.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private firestore: Firestore,private iconosvc:IconosService) { }

  addcategorias(categoria: Categorias) {
    const categoriaRef = collection(this.firestore, 'Categorias');
    return addDoc(categoriaRef, categoria);
  }

  getCategorias(): Observable<Categorias[]> {
    const categoriaRef = collection(this.firestore, 'Categorias');
    return collectionData(categoriaRef, { idField: 'id' }) as Observable<Categorias[]>;
  }

  deleteCategorias(categoria: Categorias) {
    const categoriaRef = doc(this.firestore, `Categorias/${categoria.id}`);
    return deleteDoc(categoriaRef);
  }

  updateCategorias(categoria: Categorias) {
    const categoriaRef = doc(this.firestore, `Categorias/LM3mlkwoxabQh1ssyHzh`);
    return updateDoc(categoriaRef, { categoria });
  }


}