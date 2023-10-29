import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { Categorias } from 'src/app/interfaces/categorias';
import { Iconos } from 'src/app/interfaces/iconos';
import { Subcategorias } from 'src/app/interfaces/subcategorias';
import { CategoriasService } from 'src/app/services/categorias.service';
import { IconosService } from 'src/app/services/iconos.service';
import { SubcategoriasService } from 'src/app/services/subcategorias.service';

@Component({
  selector: 'app-registrarsubcategoria',
  templateUrl: './registrarsubcategoria.component.html',
  styleUrls: ['./registrarsubcategoria.component.scss']
})
export class RegistrarsubcategoriaComponent {

  formulario!: FormGroup;
  envio: boolean = false;
  iconos: Iconos[] = [];
  categorias: Categorias[] = [];
  subcategoria: Subcategorias[] = [];

  constructor(private fb: FormBuilder, private subcategoriasvc: SubcategoriasService, private iconosvc: IconosService, private categoriasvc: CategoriasService) {
    this.crearFormulario();
  }

  ngOnInit(): void {
    combineLatest(
      [this.subcategoriasvc.getSubcategorias(),
      this.iconosvc.getIconos(), this.categoriasvc.getCategorias()]
    ).subscribe(([subcategorias, iconos, categorias]) => {
      this.iconos = iconos;
      this.categorias = categorias;
      this.subcategoria = subcategorias.map(m => {
        let valor = iconos.find(x => x.id == m.icono);
        return {
          id: m.id,
          nombre: m.nombre,
          categoria:m.categoria,
          icono: valor ? valor['img'] : ''
        }
      });
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


  get f() {
    return this.formulario.value;
  }

  crearFormulario() {
    this.formulario = this.fb.group({
      nombre: new FormControl("", Validators.required),
      icono: new FormControl("", Validators.required),
      categoria: new FormControl("", Validators.required),
    });
  }

  async onSubmit() {
    this.envio = true;
    const response = await this.subcategoriasvc.addSubcategorias(this.formulario.value).then(m => {
      this.formulario.reset();
      this.envio = false
    })
  }

  async onClickDelete(registro: Subcategorias) {
    const response = await this.subcategoriasvc.deleteSubcategorias(registro);
  }
}
