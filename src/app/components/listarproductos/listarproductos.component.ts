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
  debe: number = 0;
  cobro: number = 0;
  ingreso: number = 0;
  prestamo: number = 0;
  constructor(private productossvc: ProductosService) { }

  ngOnInit() {
    this.productossvc.getProductos().subscribe(productos => {
      this.productos = productos;
      // this.debe = productos.reduce((prev, curr) => Number(prev) + (curr.bare ? Number(curr.bare) : 0), 0);
      // this.cobro = productos.reduce((prev, curr) => Number(prev) + (curr.barco ? Number(curr.barco) : 0), 0);
      // this.ingreso = productos.reduce((prev, curr) => Number(prev) + (curr.bari ? Number(curr.bari) : 0), 0);
      // this.prestamo = productos.reduce((prev, curr) => Number(prev) + (curr.barpre ? Number(curr.barpre) : 0), 0);
    })
  }

  async onClickDelete(registro: Productos) {
    const response = await this.productossvc.deleteProductos(registro);
    console.log(response);

  }
  async onClickUpdate(registro: Productos) {
    // registro.papel=100;
    console.log(registro);
    
    const response = await this.productossvc.updateProductos(registro);
    console.log(response);

  }

}
