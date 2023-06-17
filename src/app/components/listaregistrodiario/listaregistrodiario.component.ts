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
  constructor(private registroSvc: RegistrodiarioService) { }

  ngOnInit() {
    this.registroSvc.getRegistroDiario().subscribe(registros => {
      this.registros = registros;
    })
  }

  async onClickDelete(registro: Registrodiario) {
    const response = await this.registroSvc.deleteRegistroDiario(registro);
    console.log(response);

  }
  async onClickupdate(registro: Registrodiario) {
    const response = await this.registroSvc.updateRegistroDiario(registro);
    console.log(response);

  }
}
