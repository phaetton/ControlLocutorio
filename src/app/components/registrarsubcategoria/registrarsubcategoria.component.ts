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

  iconoseleccionado:string='';
  categoriaseleccionado:string='';

  constructor(private fb: FormBuilder, private subcategoriasvc: SubcategoriasService, private iconosvc: IconosService, private categoriasvc: CategoriasService) {
    this.crearFormulario();
  }

  ngOnInit(): void {
   
  }


  crearFormulario() {
    this.formulario = this.fb.group({
      nombre: new FormControl("", Validators.required),
      icono: new FormControl(""),
      categoria: new FormControl(""),
    });
  }

  async onSubmit() {
    this.envio = true;
    this.formulario.patchValue({
      icono: this.iconoseleccionado,
      categoria: this.categoriaseleccionado
    })

    const response = await this.subcategoriasvc.addSubcategorias(this.formulario.value).then(m => {
      this.formulario.reset();
      this.envio = false
    })
  }

  async onClickDelete(registro: Subcategorias) {
    const response = await this.subcategoriasvc.deleteSubcategorias(registro);
  }


  oniconoseleccionado(icono: string) {
    this.iconoseleccionado = icono;
  }
  oniconoseleccionadocategoria(categoria: string) {
    this.categoriaseleccionado = categoria;
  }
}
