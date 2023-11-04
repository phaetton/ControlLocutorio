import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Productos } from 'src/app/interfaces/productos';
import { Subcategorias } from 'src/app/interfaces/subcategorias';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-registrarproducto',
  templateUrl: './registrarproducto.component.html',
  styleUrls: ['./registrarproducto.component.scss']
})
export class RegistrarproductoComponent {

  formulario!: FormGroup;
  envio: boolean = false;
  imageSrc: any;
  prevsubcategorias: Subcategorias[] = [];
  cantSubCat: number = 0;

  scategoria: any[] = [];
  sSubcategorias: any[] = [];

  constructor(
    private fb: FormBuilder,
    private productosvc: ProductosService
  ) {
    this.crearFormulario();
  }


  crearFormulario() {
    this.formulario = this.fb.group({
      nombre: new FormControl("", Validators.required),
      precio: new FormControl("", Validators.required),
      cantidad: new FormControl(1, Validators.required),
      img: new FormControl(""),
      categoria: new FormControl(""),
      subcategoria: new FormControl("")
    });
  }



  async onSubmit() {
    this.envio = true;
    this.prevsubcategorias.forEach((subCategoria) => {
      
      if (!this.scategoria.includes(subCategoria.categoria)) {
        this.scategoria.push(subCategoria.categoria);
      }
      this.sSubcategorias.push(subCategoria.id);
    });

    this.formulario.patchValue({
      img: this.imageSrc,
      categoria: this.scategoria,
      subcategoria: this.sSubcategorias,
    })


    const response = await this.productosvc.addProductos(this.formulario.value).then(m => {
      this.formulario.reset();
      this.envio = false
    });
  }


  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imageSrc = reader.result;
    };
    reader.readAsDataURL(file);
  }
  async onClickDelete(registro: Productos) {
    const response = await this.productosvc.deleteProductos(registro);
  }

  onsubcategoriaseleccionado(subcategoria: any) {
    this.prevsubcategorias.includes(subcategoria) ?
      this.prevsubcategorias.splice(this.prevsubcategorias.indexOf(subcategoria), 1) :
      this.prevsubcategorias.push(subcategoria);

  }



}
