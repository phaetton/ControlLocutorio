import { Component } from '@angular/core';
import { Categorias } from 'src/app/interfaces/categorias';
import { Iconos } from 'src/app/interfaces/iconos';
import { CategoriasService } from 'src/app/services/categorias.service';
import { IconosService } from 'src/app/services/iconos.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  categorias: Categorias[] = [];
  icono: Iconos[] = [];
  constructor(private categoriasvc: CategoriasService, private iconosvc: IconosService) { }

  ngOnInit() {
    this.categoriasvc.getCategorias().subscribe(categorias => {
      this.categorias = categorias;
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
