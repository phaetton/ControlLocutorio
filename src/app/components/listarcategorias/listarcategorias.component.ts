import { Component, EventEmitter, Input, Output } from '@angular/core';
import { combineLatest } from 'rxjs';
import { Categorias } from 'src/app/interfaces/categorias';
import { CategoriasService } from 'src/app/services/categorias.service';
import { IconosService } from 'src/app/services/iconos.service';

@Component({
  selector: 'app-listarcategorias',
  templateUrl: './listarcategorias.component.html',
  styleUrls: ['./listarcategorias.component.scss']
})
export class ListarcategoriasComponent {
  @Input() editar: boolean = false;
  @Output() seleccionado= new  EventEmitter<string>;
  categorias: Categorias[] = [];
  categoriaselect:string="";

  constructor(private categoriasvc: CategoriasService, private iconosvc:IconosService) { }

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
          icono: valor ? valor['img'] : ''
        }
      })
    })
  }

  async onClickDelete(registro: Categorias) {
    const response = await this.categoriasvc.deleteCategorias(registro);
  }

  seleccionar(idcategoria:string) {
    this.seleccionado.emit(idcategoria);
  }

}
