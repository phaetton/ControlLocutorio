import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Productos } from 'src/app/interfaces/productos';
import { ListacompraService } from 'src/app/services/listacompra.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-listarproductos',
  templateUrl: './listarproductos.component.html',
  styleUrls: ['./listarproductos.component.scss']
})
export class ListarproductosComponent {
  productos: Productos[] = [];
  verEliminarProducto: boolean = false;
  mEditar: string = "Editar";
  categoria?: string;
  subcategoria?: string;

  constructor(private productossvc: ProductosService, private listacomprasvc: ListacompraService, private rutaactiva: ActivatedRoute) {
  }

  // ngOnInit() {
  //   this.rutaactiva.params.subscribe(parametro => {
  //     console.log("parametro",parametro['subcategoria']);
      
  //     this.rutaactiva.parent?.params.subscribe(x =>       console.log("parametro",x['subcategoria'])

  //     )
  //     this.productossvc.getProductos().subscribe(m => {
  //       this.categoria = parametro['categoria'];
  //       this.subcategoria = parametro['subcategoria'];
  //       if (parametro['categoria']) {
  //         this.productos = m.filter(m => m.categoria == this.categoria)
  //       }
  //       else if (parametro['subcategoria']) {
  //         this.productos = m.filter(m => m.subcategoria == this.subcategoria)
  //       } else {
  //         this.productos = m;
  //       }
  //     });
  //   })
  // }


  // async onClickDelete(registro: Productos) {
  //   await this.productossvc.deleteProductos(registro);

  // }

  // onEditarProducto() {
  //   this.verEliminarProducto ? this.mEditar = "Editar" : this.mEditar = "Salir";
  //   this.verEliminarProducto = !this.verEliminarProducto;
  // }

  // async onEliminarProducto(registro: Productos) {
  //   await this.productossvc.deleteProductos(registro);
  // }

  // onAgregarCarrito(producto: Productos) {
  //   this.productossvc.quitarCantidadProducto(producto.id);
  //   this.listacomprasvc.agregarAListaCompra(producto);
  // }

}
