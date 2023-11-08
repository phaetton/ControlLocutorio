import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Factura } from 'src/app/interfaces/facturas';

@Component({
  selector: 'app-detallefactura',
  templateUrl: './detallefactura.component.html',
  styleUrls: ['./detallefactura.component.scss']
})
export class DetallefacturaComponent {
  @Input() factura?: Factura;
//   @ViewChild('cliente', { read: ElementRef }) cliente?: ElementRef;
//   @ViewChild('abono', { read: ElementRef }) abono?: ElementRef;
//   @ViewChild('listacompra', { read: ElementRef }) listacompra?: ElementRef;

  // irASecion(): void {
//    this.cliente?.nativeElement.scrollIntoView({ behavior: 'smooth' });
  // }

public scroll(element: any) {
  element.scrollIntoView({ behavior: 'smooth' });
}
}
