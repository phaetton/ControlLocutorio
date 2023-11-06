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
  @Output() seleccionado= new  EventEmitter<Cliente>;
  clientes: Cliente[] = [];
  clienteselect:string="";
  palabra?:string;
  clientefiltrado:Cliente[]=[];
  ver:boolean=false;


  constructor(private clientesvc: ClientesService) { }

  ngOnInit() {
    this.clientesvc.getCliente().subscribe(cliente => {
      this.clientes = cliente;
   this.clientefiltrado=this.clientes

    })
  }

 
  seleccionar(cliente:Cliente) {
    console.log("emitiendo ", cliente);
    
    this.seleccionado.emit(cliente);
  }


  filtrarcliente(){
    if(this.palabra)
   this.clientefiltrado = this.clientes.filter(cliente => cliente.nombre.toLowerCase().includes(this.palabra?this.palabra:''));
   else
   this.clientefiltrado=this.clientes

  }


  async onClickEditar(registro: Cliente) {
  }


  async onClickVer(registro: Cliente) {
  }


  async onClickDelete(registro: Cliente) {
    const response = await this.clientesvc.deleteCliente(registro);
  }


 
}