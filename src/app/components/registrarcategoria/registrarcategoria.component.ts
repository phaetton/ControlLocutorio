import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { Categorias } from 'src/app/interfaces/categorias';
import { Iconos } from 'src/app/interfaces/iconos';
import { CategoriasService } from 'src/app/services/categorias.service';
import { IconosService } from 'src/app/services/iconos.service';

@Component({
  selector: 'app-registrarcategoria',
  templateUrl: './registrarcategoria.component.html',
  styleUrls: ['./registrarcategoria.component.scss']
})
export class RegistrarcategoriaComponent {

  formulario!: FormGroup;
  iconos: Iconos[] = [];
  categorias: Categorias[] = [];
  envio: boolean = false;

  iconoseleccionado: string = '';


  constructor(private fb: FormBuilder, private categoriasvc: CategoriasService, private iconosvc: IconosService) {
    this.crearFormulario();
  }

  ngOnInit(): void {
    this.iconosvc.getIconos().subscribe(icono => {
      this.iconos = icono;
    })



 
  }


  

  crearFormulario() {
    this.formulario = this.fb.group({
      nombre: new FormControl("", Validators.required),
      icono: new FormControl(""),
    });
  }



  async onSubmit() {
    this.envio = true;
    this.formulario.patchValue({
      icono: this.iconoseleccionado
    })

    const response = await this.categoriasvc.addcategorias(this.formulario.value).then(m => {
      this.formulario.reset();
      this.envio = false
    });
  }


  async onClickDelete(registro: Categorias) {
    const response = await this.categoriasvc.deleteCategorias(registro);
    console.log(response);
  }

  oniconoseleccionado(icono: string) {
    this.iconoseleccionado = icono;
  }
}
