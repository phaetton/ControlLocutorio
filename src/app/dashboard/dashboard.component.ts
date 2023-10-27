import { Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import { CategoriasService } from '../services/categorias.service';
import { IconosService } from '../services/iconos.service';
import { SubcategoriasService } from '../services/subcategorias.service';
import { Subcategorias } from '../interfaces/subcategorias';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  categoria?: string;
  subcategorias: Subcategorias[]=[];
  constructor(private subcategoriassvc: SubcategoriasService,
    private iconosvc: IconosService,
    private categoriasvc: CategoriasService,
  ) {
  
  }
  onRecibirCategoria(event: string) {
    console.log("recibe padre", event);
    this.categoria = event;

  
    combineLatest(
      [this.subcategoriassvc.getSubcategorias(),
      this.iconosvc.getIconos(), this.categoriasvc.getCategorias()]
    ).subscribe(([subcategorias, iconos, categorias]) => {



      this.subcategorias = subcategorias.filter(x=>x.categoria == event).map(m => {
        let icon = iconos.find(x => x.id == m.icono);
        let cat = categorias.find(x => x.id == m.categoria);

        return {
          id: m.id,
          nombre: m.nombre,
          icono: icon ? icon['img'] : '',
          categoria: cat ? cat['nombre'] : '',
        }
      })
    })
  }



}