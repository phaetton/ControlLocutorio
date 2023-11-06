import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(
    private fb: FormBuilder,
    private clientesvc: ClientesService,
  ) {
    this.crearFormulario();
  }


  crearFormulario() {
    this.formulario = this.fb.group({
      nombre: new FormControl("", Validators.required),
      img: new FormControl(""),
    });
  }

  async onSubmit() {
    this.envio = true;

    this.formulario.patchValue({
      img: this.imageSrc
    })

    await this.clientesvc.addCliente(this.formulario.value).then(response => {
      this.formulario.reset();
      this.envio = false;
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

}