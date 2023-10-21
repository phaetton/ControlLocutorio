import { Pipe, PipeTransform } from '@angular/core';
import { Iconos } from '../interfaces/iconos';
import { IconosService } from '../services/iconos.service';
import { map } from 'rxjs';

@Pipe({
  name: 'filtroicono'
})
export class FiltroiconoPipe implements PipeTransform {
  icono: any;
  iconos: Iconos[] = []

  constructor(private iconosvc: IconosService) {
  }

  transform(value: any): any {
    // this.iconosvc.getIconos().subscribe(icono => {
    // this.icono = icono
    // })


    this.iconosvc.getIconos().subscribe(resultado => {
      return resultado;
    })


  }

}
