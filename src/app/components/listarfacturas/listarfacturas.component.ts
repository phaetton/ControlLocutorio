import { Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import { Factura } from 'src/app/interfaces/facturas';
import { ClientesService } from 'src/app/services/clientes.service';
import { FacturasService } from 'src/app/services/facturas.service';

@Component({
  selector: 'app-listarfacturas',
  templateUrl: './listarfacturas.component.html',
  styleUrls: ['./listarfacturas.component.scss']
})
export class ListarfacturasComponent {


  facturas: any ;
  facturaselect: string = "";

  constructor(private facturasvc: FacturasService, private clientesvc: ClientesService) {

    combineLatest(
      [this.facturasvc.getfactura(),
      this.clientesvc.getCliente()]
    ).subscribe(([facturas, clientes]) => {
      this.facturas = facturas.map(m => {
        let valor = clientes.find(x => x.id == m.cliente);
        return {
          ...m,
          cliente: valor ? valor['nombre'] : 'Anonimo',
          fotocliente: valor ? valor['foto'] : 'Anonimo'
        }
      })
    })
  }

  ngOnInit() {



  }

  // async onClickDelete(registro: Factura) {
  //   const response = await this.facturasvc.deletefacturas(registro);
  // }

  // seleccionar(idfactura:string) {
  //   this.seleccionado.emit(idfactura);
  // }

}
