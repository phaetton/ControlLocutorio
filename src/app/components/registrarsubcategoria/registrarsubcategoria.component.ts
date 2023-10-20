import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { SubcategoriasService } from 'src/app/services/subcategorias.service';

@Component({
  selector: 'app-registrarsubcategoria',
  templateUrl: './registrarsubcategoria.component.html',
  styleUrls: ['./registrarsubcategoria.component.scss']
})
export class RegistrarsubcategoriaComponent {

  formulario!: FormGroup;
  totalmonedas = 0;
  today = new Date();

  constructor(private fb: FormBuilder, private subcategoriasvc: SubcategoriasService) {
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
      categoria: new FormControl("", Validators.required),
      activo: new FormControl(""),
    });
  }

  async onSubmit() {
    const response = await this.subcategoriasvc.addSubcategorias(this.formulario.value);
    console.log(response);

  }
}
