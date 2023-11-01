import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Iconos } from 'src/app/interfaces/iconos';
import { IconosService } from 'src/app/services/iconos.service';

@Component({
  selector: 'app-listaricono',
  templateUrl: './listaricono.component.html',
  styleUrls: ['./listaricono.component.scss']
})
export class ListariconoComponent {
  @Input() editar: boolean = false;
  @Output() seleccionado= new  EventEmitter<string>;
  iconos: Iconos[] = [];
  iconoselect:string="";

  constructor(private iconosvc: IconosService) { }

  ngOnInit() {
    this.iconosvc.getIconos().subscribe(icono => {
      this.iconos = icono;
    })
  }

  async onClickDelete(registro: Iconos) {
    const response = await this.iconosvc.deleteIconos(registro);
  }

  seleccionar(idicono:string) {
    this.seleccionado.emit(idicono);
  }

}
