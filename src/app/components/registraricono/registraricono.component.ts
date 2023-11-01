import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { IconosService } from 'src/app/services/iconos.service';

@Component({
  selector: 'app-registraricono',
  templateUrl: './registraricono.component.html',
  styleUrls: ['./registraricono.component.scss']
})
export class RegistrariconoComponent {

  formulario!: FormGroup;
  imageSrc: any;
  envio: boolean = false;

  constructor(
    private fb: FormBuilder,
    private iconossvc: IconosService,
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

    await this.iconossvc.addIconos(this.formulario.value).then(response => {
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