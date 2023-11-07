import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-registrarclientes',
  templateUrl: './registrarclientes.component.html',
  styleUrls: ['./registrarclientes.component.scss']
})
export class RegistrarclientesComponent {


  formulario!: FormGroup;
  imageSrc: any;
  envio: boolean = false;
  idcliente?: string;


  mensaje?:string;
  mostrarmensaje:boolean = false;


  constructor(
    private fb: FormBuilder,
    private clientesvc: ClientesService,
  ) {
    this.crearFormulario();
  }


  crearFormulario() {
    this.formulario = this.fb.group({
      nombre: new FormControl("", Validators.required),
      celular: new FormControl(""),
      email: new FormControl(""),
      foto: new FormControl(""),
    });
  }

  async onSubmit() {
    this.envio = true;

    this.formulario.patchValue({
      foto: this.imageSrc
    })

    await this.clientesvc.addCliente(this.formulario.value).then(response => {
      this.formulario.reset();
      this.imageSrc = "";
      this.envio = false;
      this.mensaje = "Agregado";
      this.mostrarmensaje = true;
    });
  }


  async actualizarcliente() {
    this.envio = true;

    this.formulario.patchValue({
      foto: this.imageSrc
    })

    await this.clientesvc.updateClientes(this.formulario.value, this.idcliente).then(response => {
      this.formulario.reset();
      this.imageSrc = "";
      this.envio = false;

      this.mensaje = "Actualizado";
      this.mostrarmensaje = true;
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imageSrc = reader.result;
    };
    reader.readAsDataURL(file);
  }

  editarCliente(cliente: Cliente) {
    this.idcliente = cliente.id;
    this.formulario.patchValue(cliente);
    this.imageSrc = cliente.foto;

  }


 
}
