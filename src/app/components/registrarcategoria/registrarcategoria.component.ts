import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
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
  totalmonedas = 0;
  today = new Date();
  iconos:Iconos[]=[];

  constructor(private fb: FormBuilder, private categoriasvc: CategoriasService,private iconosvc:IconosService) {
    this.crearFormulario();
  }

  ngOnInit(): void {
    this.iconosvc.getIconos().subscribe(icono => {
      this.iconos = icono;
    })
  }

  get f() {
    return this.formulario.value;
  }

  crearFormulario() {
    this.formulario = this.fb.group({
      nombre: new FormControl("", Validators.required),
      icono: new FormControl(""),
    });
  }



  async onSubmit() {
    const response = await this.categoriasvc.addcategorias(this.formulario.value);
    console.log(response);

  }
}
