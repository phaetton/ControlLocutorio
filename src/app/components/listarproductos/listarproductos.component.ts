import { Component, EventEmitter, Input, Output } from '@angular/core';
import { combineLatest } from 'rxjs';
import { Productos } from 'src/app/interfaces/productos';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-listarproductos',
  templateUrl: './listarproductos.component.html',
  styleUrls: ['./listarproductos.component.scss']
})
export class ListarproductosComponent {
  @Input() editar: boolean = false;
  @Output() seleccionado = new EventEmitter<string>;
  @Output() EProducto = new EventEmitter<Productos>;
  productos: Productos[] = [];
  productoselect: string = "";

  constructor(private productosvc: ProductosService) { }

  ngOnInit() {
    this.productosvc.getProductos().subscribe(producto => {
      this.productos = producto;
    })

  }

  async onClickDelete(registro: Productos) {
    const response = await this.productosvc.deleteProductos(registro);
  }

  seleccionar(idcategoria: string) {
    this.seleccionado.emit(idcategoria);
  }

  onAgregarCarrito(producto: Productos) {

  }

  editarProducto(producto: Productos) {
    this.EProducto.emit(producto);
  }

}
