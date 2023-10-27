import { Component } from '@angular/core';
import { Categorias } from 'src/app/interfaces/categorias';
import { Iconos } from 'src/app/interfaces/iconos';
import { CategoriasService } from 'src/app/services/categorias.service';
import { IconosService } from 'src/app/services/iconos.service';
import { combineLatest, forkJoin } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  categorias: Categorias[] = [];
  iconos: Iconos[] = [];
  constructor(private categoriasvc: CategoriasService, private iconosvc: IconosService) { }

  ngOnInit() {

    combineLatest(
      [this.categoriasvc.getCategorias(),
      this.iconosvc.getIconos()]
    ).subscribe(([categorias, iconos]) => {
      this.categorias = categorias.map(m => {
        let valor = iconos.find(x => x.id == m.icono);
        return {
          id: m.id,
          nombre: m.nombre,
          icono: valor ? valor['img']: ''
        }
      })
    })  
  }

  async onClickDelete(registro: Categorias) {
    const response = await this.categoriasvc.deleteCategorias(registro);
    console.log(response);

  }
  async onClickUpdate(registro: Categorias) {
    const response = await this.categoriasvc.updateCategorias(registro);
    console.log(response);

  }

}
