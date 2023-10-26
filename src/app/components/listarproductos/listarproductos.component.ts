import { Component } from '@angular/core';
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

  constructor(private productossvc: ProductosService, private listacomprasvc: ListacompraService) { }

  ngOnInit() {
    this.productossvc.getProductos().subscribe(productos => {
      this.productossvc.defineProducto(productos);
      this.productos = this.productossvc.gProducto;
    })
  }

  async onClickDelete(registro: Productos) {
    await this.productossvc.deleteProductos(registro);

  }

  // async onClickUpdate(registro: Productos) {
  //   await this.productossvc.updateProductos(registro);
  // }

  onEditarProducto() {
    this.verEliminarProducto ? this.mEditar = "Editar" : this.mEditar = "Salir";
    this.verEliminarProducto = !this.verEliminarProducto;
  }

  async onEliminarProducto(registro: Productos) {
    await this.productossvc.deleteProductos(registro);
  }

  onAgregarCarrito(producto: Productos) {
    this.productossvc.quitarCantidad(producto.id);
this.productos[0].cantidad=8;

    this.productossvc.updateProductos(producto);
    this.listacomprasvc.agregarALista(producto);
  }



}
