import { Component } from '@angular/core';
import { Iconos } from 'src/app/interfaces/iconos';
import { IconosService } from 'src/app/services/iconos.service';

@Component({
  selector: 'app-listaricono',
  templateUrl: './listaricono.component.html',
  styleUrls: ['./listaricono.component.scss']
})
export class ListariconoComponent {

  iconos: Iconos[] = [];
  debe: number = 0;
  cobro: number = 0;
  ingreso: number = 0;
  prestamo: number = 0;
  constructor(private iconosvc: IconosService) { }

  ngOnInit() {
    this.iconosvc.getIconos().subscribe(icono => {
      this.iconos = icono;
    })
  }

  async onClickDelete(registro: Iconos) {
    const response = await this.iconosvc.deleteIconos(registro);
    console.log(response);

  }
  async onClickUpdate(registro: Iconos) {
    console.log(registro);
    
    const response = await this.iconosvc.updateIconos(registro);
    console.log(response);

  }

}
