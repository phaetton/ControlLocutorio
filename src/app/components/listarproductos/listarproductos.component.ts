import { Component } from '@angular/core';
import { Productos } from 'src/app/interfaces/productos';
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

  constructor(private productossvc: ProductosService) { }

  ngOnInit() {
    this.productossvc.getProductos().subscribe(productos => {
      this.productos = productos;
    })
  }

  async onClickDelete(registro: Productos) {
    await this.productossvc.deleteProductos(registro);

  }
  async onClickUpdate(registro: Productos) {
    await this.productossvc.updateProductos(registro);
  }
  onEditarProducto() {
    this.verEliminarProducto ? this.mEditar = "Editar" : this.mEditar = "Salir";
    this.verEliminarProducto = !this.verEliminarProducto;
  }



  async onEliminarProducto(registro: Productos) {
    await this.productossvc.deleteProductos(registro);

  }
}
