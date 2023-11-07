import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/interfaces/cliente';

@Component({
  selector: 'app-formulariocliente',
  templateUrl: './formulariocliente.component.html',
  styleUrls: ['./formulariocliente.component.scss']
})
export class FormularioclienteComponent {
  formulario!: FormGroup;
  imageSrc: any;
  @Output() clienteform= new  EventEmitter<Cliente>;


  constructor(
    private fb: FormBuilder,
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

    this.formulario.patchValue({
      foto: this.imageSrc
    })

      this.formulario.reset();
      this.imageSrc = "";
  }



  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imageSrc = reader.result;
      this.formulario.patchValue({
        foto: reader.result
      })
      this.enviarFormulario();
    };
    reader.readAsDataURL(file);
  }

  editarCliente(cliente: Cliente) {
    this.formulario.patchValue(cliente);
    this.imageSrc = cliente.foto;

  }

enviarFormulario(){

  this.clienteform.emit(this.formulario.value);
}
 
}
