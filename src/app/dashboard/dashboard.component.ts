import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Productos } from '../interfaces/productos';
import { ListacompraService } from '../services/listacompra.service';
import { ProductosService } from '../services/productos.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  productos: Productos[] = [];
  verEliminarProducto: boolean = false;
  mEditar: string = "Editar";
  categoria?: string;
  subcategoria?: string;
  nombreCategoria:any;

  productoFiltrado:Productos[]=[]

  constructor(private productossvc: ProductosService, private listacomprasvc: ListacompraService, private rutaactiva: ActivatedRoute) {
  }

  ngOnInit() {
    this.rutaactiva.params.subscribe(parametro => {
    
      this.productossvc.getProductos().subscribe(m => {
        this.nombreCategoria = m[0].categoria;
        this.categoria = parametro['categoria'];
        this.subcategoria = parametro['subcategoria'];
        if (parametro['categoria']) {
          this.productoFiltrado = m.filter(m => m.categoria == this.categoria)
        }else {
          this.productoFiltrado = m;
        }

        this.productos = this.productoFiltrado;
      });
    })
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

  onRecibirSub(idSub:string){
  this.productos = this.productoFiltrado.filter(m => m.subcategoria?.indexOf(idSub))
  }

}
