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
  listacompras: Listacompra[] = [
    {
      "precio": 6, "activo": true, "categoria": ["gaKpNYTxDRCS6jOzNhdA"],
      "img": "../assets/imagen/predefinida.jpg", "nombre": "nuevo", "cantidad": 4, "subcategoria": ["eC69T9PBGdAaPRxujunS"], "id": "uuqdAwHPzN7merckqIxR", "cantidadCompra": 5
    }, {
      "cantidad": 4, "activo": true, "precio": 333, "nombre": "dfsfd", "subcategoria": ["qz0AI9Cvf2hBY52Wvfhc", "eC69T9PBGdAaPRxujunS", "6SEZCAIyPMrpY2aer9k8"], "categoria": ["rS6yTCA36dCNv0cJsX4E", "gaKpNYTxDRCS6jOzNhdA"],
      "img": "../assets/imagen/predefinida.jpg", "id": "PjsU98LU9gXiqBxrmESw", "cantidadCompra": 5
    }, {
      "activo": true, "categoria": ["rS6yTCA36dCNv0cJsX4E"],
      "img": "../assets/imagen/predefinida.jpg", "precio": 4, "subcategoria": ["qz0AI9Cvf2hBY52Wvfhc"], "cantidad": 0, "nombre": "yyy", "id": "7upybCo98inBv2nQpFFm", "cantidadCompra": 1
    }];
  tipocliente: string = "nuevo";





  constructor(private rutaactiva: ActivatedRoute, private listacomprasvc: ListacompraService) {
    // this.listacompras = this.listacomprasvc.listacompras;
  }

  calcularCantidadcompra() {
    return this.listacompras.reduce((acumulador, producto) => acumulador + producto.cantidadCompra, 0);
  }

  calculartotalcompra() {
    return this.listacompras.reduce((acumulador, producto) => acumulador + (producto.precio * producto.cantidadCompra), 0);
  }

  eliminarCompra(producto: Listacompra) {
    this.listacompras.splice(this.listacompras.indexOf(producto), 1)
  }


  ngOnInit(): void {
    this.rutaactiva.params.subscribe(parametro => {

      this.descuento = parametro['descuento'];
    })
  }
}
