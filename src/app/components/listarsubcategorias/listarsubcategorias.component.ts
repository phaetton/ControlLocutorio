import { Component, EventEmitter, Input, Output } from '@angular/core';
import { combineLatest } from 'rxjs';
import { Subcategorias } from 'src/app/interfaces/subcategorias';
import { IconosService } from 'src/app/services/iconos.service';
import { SubcategoriasService } from 'src/app/services/subcategorias.service';

@Component({
  selector: 'app-listarsubcategorias',
  templateUrl: './listarsubcategorias.component.html',
  styleUrls: ['./listarsubcategorias.component.scss']
})
export class ListarsubcategoriasComponent {

  @Input() editar: boolean = false;
  @Output() seleccionado = new EventEmitter<Subcategorias>;
  subcategorias: Subcategorias[] = [];

  constructor(private subcategoriasvc: SubcategoriasService, private iconosvc: IconosService) { }

  ngOnInit() {

    combineLatest(
      [this.subcategoriasvc.getSubcategorias(),
      this.iconosvc.getIconos()]
    ).subscribe(([subcategorias, iconos]) => {
      this.subcategorias = subcategorias.map(m => {
        let valor = iconos.find(x => x.id == m.icono);
        return {...m ,icono: valor ? valor['img'] : ''}

        //otro metodo para hacer la linea anterior
        // return {
        //   id: m.id,
        //   nombre: m.nombre,
        //   categoria: m.categoria,
        //   icono: valor ? valor['img'] : ''
        // }
      })
    })
  }

  async onClickDelete(registro: Subcategorias) {
    const response = await this.subcategoriasvc.deleteSubcategorias(registro);
  }

  seleccionar(subcategoria: Subcategorias) {
    this.seleccionado.emit(subcategoria);
  }




}
