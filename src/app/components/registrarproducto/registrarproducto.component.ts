import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-registrarproducto',
  templateUrl: './registrarproducto.component.html',
  styleUrls: ['./registrarproducto.component.scss']
})
export class RegistrarproductoComponent {

  formulario!: FormGroup;
  totalmonedas = 0;
  today = new Date();

  constructor(private fb: FormBuilder, private productosvc: ProductosService) {
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  get f() {
    return this.formulario.value;
  }

  // fecha: new FormControl(this.today.getTime()),
  crearFormulario() {
    this.formulario = this.fb.group({
      nombre: new FormControl("", Validators.required),
      precio: new FormControl("",Validators.required),
      cantidad: new FormControl(1,Validators.required),
      img: new FormControl(""),
      categoria: new FormControl(""),
      subcategoria: new FormControl(""),
      activo: new FormControl(""),
    });
  }



  async onSubmit() {
    const response = await this.productosvc.addProductos(this.formulario.value);
    console.log(response);

  }
}
