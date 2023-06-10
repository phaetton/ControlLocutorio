import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar-cierre',
  templateUrl: './registrar-cierre.component.html',
  styleUrls: ['./registrar-cierre.component.scss']
})
export class RegistrarCierreComponent {

  formulario!: FormGroup;
  totalmonedas = 0;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.crearFormulario();
  }

  get f() {
    return this.formulario.value;
  }

  crearFormulario() {
    this.formulario = this.fb.group({
      experienciaLaboral: this.fb.array([]),
      centimo1: new FormControl("",Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(10),
        Validators.pattern('/^[1-9]\d{6,10}$/')])),
      centimo2: new FormControl(""),
      centimo5: new FormControl(""),
      centimo10: new FormControl(""),
      centimo20: new FormControl(""),
      centimo50: new FormControl(""),
      euro1: new FormControl(""),
      euro2: new FormControl(""),
      euro5: new FormControl(""),
      euro10: new FormControl(""),
      euro20: new FormControl(""),
      euro50: new FormControl(""),
      euro100: new FormControl(""),
      papel: new FormControl(""),
    });
  }

  get cantidadmonedas() {
    return (
      this.f['centimo1'] ? (parseInt(this.f['centimo1']) * 0.01 ): 0) +
      (this.f['centimo2'] ? (parseInt(this.f['centimo2']) * 0.02 ): 0) +
      (this.f['centimo5'] ? (parseInt(this.f['centimo5']) * 0.05 ): 0) +
      (this.f['centimo10'] ? (parseInt(this.f['centimo10']) * 0.1 ): 0) +
      (this.f['centimo20'] ? (parseInt(this.f['centimo20']) * 0.2 ): 0) +
      (this.f['centimo50'] ? (parseInt(this.f['centimo50']) * 0.5 ): 0) +
      (this.f['euro1'] ? (parseInt(this.f['euro1']) ): 0) + 
      (this.f['euro2'] ? (parseInt(this.f['euro2']) * 2 ): 0) +
       (this.f['euro5'] ? (parseInt(this.f['euro5']) * 5 ): 0) + 
       (this.f['euro10'] ? (parseInt(this.f['euro10']) * 10 ): 0) +
        (this.f['euro20'] ? (parseInt(this.f['euro20']) * 20 ): 0) + 
        (this.f['euro50'] ? (parseInt(this.f['euro50']) * 50 ): 0) + 
        (this.f['euro100'] ? (parseInt(this.f['euro100']) * 100 ): 0) + 
        (this.f['papel'] ? (parseInt(this.f['papel']) ): 0);

  }

}
