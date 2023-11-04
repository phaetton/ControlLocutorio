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
  productos: Productos[] = [];
  productoselect: string = "";

  constructor(private productosvc: ProductosService) { }

  ngOnInit() {
    this.productosvc.getProductos().subscribe(producto => {
      this.productos = producto;
    })

    // combineLatest(
    //   [this.productosvc.getProductos(),
    //     this.categoriasvc.getCategorias()]
    // ).subscribe(([categorias, producto]) => {
    //   this.productos = producto.map(m => {
    //     let valor = categorias.find(x => x.id == m.icono);
    //     return {
    //       id: m.id,
    //       nombre: m.nombre,
    //       icono: valor ? valor['img'] : ''
    //     }
    //   })
    // })
  }

  async onClickDelete(registro: Productos) {
    const response = await this.productosvc.deleteProductos(registro);
  }

  seleccionar(idcategoria: string) {
    this.seleccionado.emit(idcategoria);
  }

}
