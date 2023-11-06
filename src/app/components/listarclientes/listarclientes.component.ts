import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-listarclientes',
  templateUrl: './listarclientes.component.html',
  styleUrls: ['./listarclientes.component.scss']
})
export class ListarclientesComponent {
  @Input() editar: boolean = false;
  @Output() seleccionado= new  EventEmitter<string>;
  clientes: Cliente[] = [];
  clienteselect:string="";

  constructor(private clientesvc: ClientesService) { }

  ngOnInit() {
    this.clientesvc.getCliente().subscribe(cliente => {
      this.clientes = cliente;
    })
  }

  async onClickDelete(registro: Cliente) {
    const response = await this.clientesvc.deleteCliente(registro);
  }

  seleccionar(idcliente:string) {
    this.seleccionado.emit(idcliente);
  }

}