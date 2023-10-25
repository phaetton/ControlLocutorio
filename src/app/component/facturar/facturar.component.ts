import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Listacompra } from 'src/app/interfaces/listacompra';
import { ListacompraService } from 'src/app/services/listacompra.service';

@Component({
  selector: 'app-facturar',
  templateUrl: './facturar.component.html',
  styleUrls: ['./facturar.component.scss']
})
export class FacturarComponent {
  descuento: any;
  listacompras: Listacompra[] = [];
tipocliente:string="anonimo";


  
 

  constructor(private rutaactiva: ActivatedRoute, private listacomprasvc: ListacompraService) {
    this.listacompras = this.listacomprasvc.listacompras;
  }

  calcularCantidadcompra() {
    return this.listacompras.reduce((acumulador, producto) => acumulador + producto.cantidadCompra, 0);
  }


  ngOnInit(): void {
    this.rutaactiva.params.subscribe(parametro => {
      console.log(parametro);
      
      this.descuento = parametro['descuento'];
    })
  }
}
