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
  prevsubcategorias?: Subcategorias[];
  cantSubCat: number = 0;

  scategoria: any[] = [];
  sSubcategorias: any[] = [];
  enviandoSubCategoria?: string[];
   idproducto? :string;

   mensaje ?:string ;
   mostrarmensaje :boolean= false;
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
    this.prevsubcategorias?.forEach((subCategoria) => {

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
      this.envio = false;



      this.imageSrc ='';
      this.enviandoSubCategoria =[];
      this.mensaje = "Agregado";
      this.mostrarmensaje = true;

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

    if (this.prevsubcategorias?.find(item => item.nombre == subcategoria.nombre)) {
      this.prevsubcategorias = this.prevsubcategorias?.filter(item => item.nombre !== subcategoria.nombre)
    } else {
      this.prevsubcategorias?.push(subcategoria)
    }

    // this.prevsubcategorias?.includes(subcategoria.nombre) ?
    //   this.prevsubcategorias.splice(this.prevsubcategorias.indexOf(subcategoria), 1) :
    //   this.prevsubcategorias?.push(subcategoria);


    // this.prevsubcategorias?.includes(subcategoria.nombre) ?
    //   this.prevsubcategorias.splice(this.prevsubcategorias.indexOf(subcategoria), 1) :
    //   this.prevsubcategorias?.push(subcategoria);
  }

  editarproducto(producto: Productos) {
    this.idproducto = producto.id;
    
    this.formulario.patchValue(producto);
    this.imageSrc = producto.img;
    this.subcategoriasvc.getSubcategorias().subscribe(respuesta => {
      let filteredArray = respuesta.filter(item => producto.subcategoria?.includes(item.id ? item.id : ''));
      this.prevsubcategorias = filteredArray;
    });

    this.enviandoSubCategoria = producto.subcategoria;

  }

  async actualizarproducto() {

    this.envio = true;
    this.prevsubcategorias?.forEach((subCategoria) => {

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


    const response = await this.productosvc.updateProductos(this.formulario.value,this.idproducto ).then(m => {
      this.formulario.reset();
      this.envio = false;
      this.imageSrc ='';
      this.prevsubcategorias =[];
      this.enviandoSubCategoria =[];
      this.mensaje = "Actualizado";
      this.mostrarmensaje = true;
    });

    // let objetoFiltrado = this.prevsubcategorias?.filter(elemento => {
    //   let valor = !this.enviandoSubCategoria?.some(m => m == elemento.id);
    //   this.enviandoSubCategoria = this.enviandoSubCategoria?.filter(subcat => subcat != elemento.id);
    //   return valor;
    // });





    // objetoFiltrado?.forEach((subCategoria) => {

    //   if (!this.scategoria.includes(subCategoria.categoria)) {
    //     this.scategoria.push(subCategoria.categoria);
    //   }
    //   this.sSubcategorias.push(subCategoria.id);
    // });


    // this.formulario.patchValue({
    //   img: this.imageSrc,
    //   categoria: this.scategoria,
    //   subcategoria: this.sSubcategorias,
    // })
    // this.scategoria = [];
    // this.sSubcategorias = [];

   

  }

}


 // let resp = respuesta.filter(sub=>sub.id != m)
      // this.prevsubcategorias = resp;
      // this.enviandoSubCategoria = respuesta?.filter(subcat => subcat != elemento.id);   

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


    // let existe = objeto.some(elemento => elemento.id === "rlzWPkjhAk4CMVFsA5Y2");




    // this.enviandoSubCategoria?.map(m => {
    //   let objetoFiltrado = this.prevsubcategorias.filter(elemento => elemento.id !== m);
    // })



     // const response = await this.productosvc.addProductos(this.formulario.value).then(m => {
    //   this.formulario.reset();
    //   this.envio = false
    // });


    // Eliminar el elemento en enviandoSubCategoria
    // this.enviandoSubCategoria?.slice(this.enviandoSubCategoria.findIndex(m=>m=='USXcpHI0qZNpLNvcajtc'))
    // let valor =  this.enviandoSubCategoria?.filter(x => x != 'USXcpHI0qZNpLNvcajtc');


    // this.prevsubcategorias.includes(subcategoria) ?
    // this.prevsubcategorias.splice(this.prevsubcategorias.indexOf(subcategoria), 1) :
    // this.prevsubcategorias.push(subcategoria);


    
    //ya tenemos el producto eliminado de ambos arreglos
    // this.envio = true;
    // this.scategoria = this.prevsubcategorias.map(m=>m.categoria);
    // this.sSubcategorias = this.prevsubcategorias.map(m=>m.id);