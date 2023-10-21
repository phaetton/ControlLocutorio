import { Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import { Subcategorias } from 'src/app/interfaces/subcategorias';
import { CategoriasService } from 'src/app/services/categorias.service';
import { IconosService } from 'src/app/services/iconos.service';
import { SubcategoriasService } from 'src/app/services/subcategorias.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  subcategorias: Subcategorias[] = [];
  admin?: boolean;
  otro: any;
  constructor(private subcategoriassvc: SubcategoriasService, private iconosvc: IconosService, private categoriasvc: CategoriasService) {
  }

  ngOnInit() {

    combineLatest(
      [this.subcategoriassvc.getSubcategorias(),
      this.iconosvc.getIconos(), this.categoriasvc.getCategorias()]
    ).subscribe(([subcategorias, iconos, categorias]) => {
      this.subcategorias = subcategorias.map(m => {
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


  async onClickDelete(registro: Subcategorias) {
    const response = await this.subcategoriassvc.deleteSubcategorias(registro);
    console.log(response);

  }
  async onClickUpdate(registro: Subcategorias) {
    const response = await this.subcategoriassvc.updateSubcategorias(registro);
    console.log(response);

  }

}