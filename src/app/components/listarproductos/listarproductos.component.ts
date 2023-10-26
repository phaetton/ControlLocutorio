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

  constructor(private productossvc: ProductosService, private listacomprasvc: ListacompraService) {
  }

  ngOnInit() {
    this.productossvc.getProductos().subscribe(m =>
      this.productos = m
    );
  }

  async onClickDelete(registro: Productos) {
    await this.productossvc.deleteProductos(registro);

  }

  onEditarProducto() {
    this.verEliminarProducto ? this.mEditar = "Editar" : this.mEditar = "Salir";
    this.verEliminarProducto = !this.verEliminarProducto;
  }

  async onEliminarProducto(registro: Productos) {
    await this.productossvc.deleteProductos(registro);
  }

  onAgregarCarrito(producto: Productos) {
    this.productossvc.quitarCantidadProducto(producto.id);
    this.listacomprasvc.agregarAListaCompra(producto);
  }

}
