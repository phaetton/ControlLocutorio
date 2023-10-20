import { Component } from '@angular/core';
import { Categorias } from 'src/app/interfaces/categorias';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  categorias: Categorias[] = [];
  constructor(private categoriasvc: CategoriasService) { }

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
