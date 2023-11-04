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
  @Output() seleccionado = new EventEmitter<string>;
  subcategorias: Subcategorias[] = [];
  subcategoriaselect: string = "";
  prevsubcategorias: Subcategorias[] = [];

  constructor(private subcategoriasvc: SubcategoriasService, private iconosvc: IconosService) { }

  ngOnInit() {

    combineLatest(
      [this.subcategoriasvc.getSubcategorias(),
      this.iconosvc.getIconos()]
    ).subscribe(([subcategorias, iconos]) => {
      this.subcategorias = subcategorias.map(m => {
        let valor = iconos.find(x => x.id == m.icono);
        return {
          id: m.id,
          nombre: m.nombre,
          icono: valor ? valor['img'] : ''
        }
      })
    })
  }

  async onClickDelete(registro: Subcategorias) {
    const response = await this.subcategoriasvc.deleteSubcategorias(registro);
  }

  seleccionar(idsubcategoria: string) {
    this.seleccionado.emit(idsubcategoria);
  }


  
  // oncheckbox(subcategoria: Subcategorias) {
  //   // delete subcategoria.icono;
  //   console.log(subcategoria );
    
  //   this.prevsubcategorias.includes(subcategoria) ?
  //     this.prevsubcategorias.splice(this.prevsubcategorias.indexOf(subcategoria), 1) :
  //     this.prevsubcategorias.push(subcategoria);

  // }
}
