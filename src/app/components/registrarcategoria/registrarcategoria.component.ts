import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-registrarcategoria',
  templateUrl: './registrarcategoria.component.html',
  styleUrls: ['./registrarcategoria.component.scss']
})
export class RegistrarcategoriaComponent {

  formulario!: FormGroup;
  totalmonedas = 0;
  today = new Date();

  constructor(private fb: FormBuilder, private categoriasvc: CategoriasService) {
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  get f() {
    return this.formulario.value;
  }

  crearFormulario() {
    this.formulario = this.fb.group({
      nombre: new FormControl("", Validators.required),
      icono: new FormControl("", Validators.required),
      activo: new FormControl(""),
    });
  }



  async onSubmit() {
    const response = await this.categoriasvc.addcategorias(this.formulario.value);
    console.log(response);

  }
}
