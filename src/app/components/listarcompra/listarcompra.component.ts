import { Component, Input } from '@angular/core';
import { Listacompra } from 'src/app/interfaces/listacompra';
import { ListacompraService } from 'src/app/services/listacompra.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-listarcompra',
  templateUrl: './listarcompra.component.html',
  styleUrls: ['./listarcompra.component.scss']
})
export class ListarcompraComponent {
  @Input() listacompras: Listacompra[] = [];
  totalcompra: number = 0;
  cantidadTotal:number=0;
  descuento:number=0;
  
  constructor(private listacomprasvc: ListacompraService,private productossvc:ProductosService) {
  }

  ngOnInit() {
    this.listacompras= this.listacomprasvc.listacompras;
    this.totalcompra = this.listacomprasvc.totalcompra;
  }

  calculartotalcompra() {
    this.cantidadTotal= this.listacompras.reduce((acumulador, producto) => acumulador + producto.cantidad, 0);
    return  this.listacompras.reduce((acumulador, producto) => acumulador + (producto.precio * producto.cantidad), 0);
  }

  quitar(id:number){
   this.listacomprasvc.quitarCantidad(id);
  //  this.productossvc.agregarCantidad(id);
  }

  facturar(){
    
  }
}
