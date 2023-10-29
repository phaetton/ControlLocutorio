import { Location } from '@angular/common';
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
  totalmonedas = 0;
  today = new Date();
  imageSrc:any;
  envio:boolean=false;

  constructor(private fb: FormBuilder, private iconossvc: IconosService,private location:Location) {
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  get f() {
    return this.formulario.value;
  }

  crearFormulario() {
    this.formulario = this.fb.group({
      nombre: new FormControl("", Validators.required),
      img: new FormControl(""),
    });
  }

  async onSubmit() {
    this.envio=true;
    this.formulario.patchValue({
      img: this.imageSrc
    })
    const response = await this.iconossvc.addIconos(this.formulario.value);
    this.formulario.reset();
    this.envio=false;
    console.log(response);

  }



  onFileSelected(event: any) {
    const file = event.target.files[0];
    // Crear un objeto FileReader para leer el archivo.
    const reader = new FileReader();
    // Cuando el archivo se haya cargado, establecer la fuente de la imagen en la URL del archivo.
    reader.onload = () => {
      this.imageSrc = reader.result;
    };
    // Leer el archivo como una URL de datos.
    reader.readAsDataURL(file);
  }


}


