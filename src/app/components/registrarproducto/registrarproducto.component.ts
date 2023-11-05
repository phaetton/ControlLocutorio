import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { Productos } from 'src/app/interfaces/productos';
import { Subcategorias } from 'src/app/interfaces/subcategorias';
import { ProductosService } from 'src/app/services/productos.service';
import { SubcategoriasService } from 'src/app/services/subcategorias.service';

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
  enviandoSubCategoria?: string[];


  // todosubcategoria?: any
  constructor(
    private fb: FormBuilder,
    private productosvc: ProductosService,
    private subcategoriasvc: SubcategoriasService
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

  editarproducto(producto: Productos) {
    this.formulario.patchValue(producto);
    this.imageSrc = producto.img;
    this.enviandoSubCategoria = producto.subcategoria;


    // this.subcategoriasvc.getSubcategorias().pipe(
    //   map(m =>
    //     producto.subcategoria?.map(
    //       x => m.find(a => a.id == x)
    //     )
    //   )
    // ).subscribe(respuesta => {
    //   this.todosubcategoria = respuesta
    //   this.onsubcategoriaseleccionado(this.todosubcategoria)
    // });


  }

  actualizarproducto() {
    console.log(this.prevsubcategorias);
    console.log(this.enviandoSubCategoria);

    // let existe = objeto.some(elemento => elemento.id === "rlzWPkjhAk4CMVFsA5Y2");




    // this.enviandoSubCategoria?.map(m => {
    //   let objetoFiltrado = this.prevsubcategorias.filter(elemento => elemento.id !== m);
    // })


    let objetoFiltrado = this.prevsubcategorias.filter(elemento => {
      return !this.enviandoSubCategoria?.some(m => m == elemento.id)
    });


    console.log(objetoFiltrado);



    // Eliminar el elemento en enviandoSubCategoria
    // this.enviandoSubCategoria?.slice(this.enviandoSubCategoria.findIndex(m=>m=='USXcpHI0qZNpLNvcajtc'))
    // console.log(this.enviandoSubCategoria);
    // let valor =  this.enviandoSubCategoria?.filter(x => x != 'USXcpHI0qZNpLNvcajtc');

    //   console.log(valor);

    // this.prevsubcategorias.includes(subcategoria) ?
    // this.prevsubcategorias.splice(this.prevsubcategorias.indexOf(subcategoria), 1) :
    // this.prevsubcategorias.push(subcategoria);

  }

}
