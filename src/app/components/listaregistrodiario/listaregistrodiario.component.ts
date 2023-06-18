import { Component } from '@angular/core';
import { Registrodiario } from 'src/app/interfaces/registrodiario';
import { RegistrodiarioService } from 'src/app/services/registrodiario.service';

@Component({
  selector: 'app-listaregistrodiario',
  templateUrl: './listaregistrodiario.component.html',
  styleUrls: ['./listaregistrodiario.component.scss']
})
export class ListaregistrodiarioComponent {
  registros: Registrodiario[] = [];
  debe: number = 0;
  cobro: number = 0;
  constructor(private registroSvc: RegistrodiarioService) { }

  ngOnInit() {
    this.registroSvc.getRegistroDiario().subscribe(registros => {
      this.registros = registros;

      this.debe = registros.reduce((prev, curr) => Number(prev) + (curr.bare ? curr.bare : 0), 0);
      this.cobro = registros.reduce((prev, curr) => Number(prev) + (curr.barco ? curr.barco : 0), 0);
    })
  }

  async onClickDelete(registro: Registrodiario) {
    const response = await this.registroSvc.deleteRegistroDiario(registro);
    console.log(response);

  }

}
