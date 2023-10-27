import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  @Input() categoria?: string;
  @Input() subcategorias: Subcategorias[] = [];
  admin?: boolean;
  otro: any;

  constructor(
    private subcategoriassvc: SubcategoriasService,
    private iconosvc: IconosService,
    private categoriasvc: CategoriasService,
    private rutaactiva: ActivatedRoute
  ) {
    if (this.categoria) {
      console.log("existe categoria");

    } else {
      console.log("no hay categoria");

    }
  }

  ngOnInit() {
    this.rutaactiva.params.subscribe(parametro => {
      console.log("parametro", parametro);
      
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