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
      centimo1: new FormControl("", Validators.compose([Validators.maxLength(10), Validators.pattern('/^[1-9]')])),
      centimo2: new FormControl("", Validators.compose([Validators.maxLength(10), Validators.pattern('/^[1-9]')])),
      centimo5: new FormControl("", Validators.compose([Validators.maxLength(10), Validators.pattern('/^[1-9]')])),
      centimo10: new FormControl("", Validators.compose([Validators.maxLength(10), Validators.pattern('/^[1-9]')])),
      centimo20: new FormControl("", Validators.compose([Validators.maxLength(10), Validators.pattern('/^[1-9]')])),
      centimo50: new FormControl("", Validators.compose([Validators.maxLength(10), Validators.pattern('/^[1-9]')])),
      euro1: new FormControl("", Validators.compose([Validators.maxLength(10), Validators.pattern('/^[1-9]')])),
      euro2: new FormControl("", Validators.compose([Validators.maxLength(10), Validators.pattern('/^[1-9]')])),
      euro5: new FormControl("", Validators.compose([Validators.maxLength(10), Validators.pattern('/^[1-9]')])),
      euro10: new FormControl("", Validators.compose([Validators.maxLength(10), Validators.pattern('/^[1-9]')])),
      euro20: new FormControl("", Validators.compose([Validators.maxLength(10), Validators.pattern('/^[1-9]')])),
      euro50: new FormControl("", Validators.compose([Validators.maxLength(10), Validators.pattern('/^[1-9]')])),
      euro100: new FormControl("", Validators.compose([Validators.maxLength(10), Validators.pattern('/^[1-9]')])),
      papel: new FormControl("", Validators.compose([Validators.maxLength(10), Validators.pattern('/^[1-9]')])),
    });
  }


  get centimo1() {
    return parseInt(this.f['centimo1']);
  }
  get centimo2() {
    return parseInt(this.f['centimo2']);
  }
  get centimo5() {
    return parseInt(this.f['centimo5']);
  }
  get centimo10() {
    return parseInt(this.f['centimo10']);
  }
  get centimo20() {
    return parseInt(this.f['centimo20']);
  }
  get centimo50() {
    return parseInt(this.f['centimo50']);
  }
  get euro1() {
    return parseInt(this.f['euro1']);
  }
  get euro2() {
    return parseInt(this.f['euro2']);
  }
  get euro5() {
    return parseInt(this.f['euro5']);
  }
  get euro10() {
    return parseInt(this.f['euro10']);
  }
  get euro20() {
    return parseInt(this.f['euro20']);
  }
  get euro50() {
    return parseInt(this.f['euro50']);
  }
  get euro100() {
    return parseInt(this.f['euro100']);
  }
  get papel() {
    return parseInt(this.f['papel']);
  }


  get cantidadmonedas() {
    return (this.centimo1 ? this.centimo1 / 100 : 0) + (this.centimo2 ? this.centimo2 / 50 : 0) + (this.centimo5 ? this.centimo5 * 20 : 0) + (this.centimo10 ? this.centimo10 / 10 : 0) + (this.centimo20 ? this.centimo20 / 5 : 0) + (this.centimo50 ? this.centimo50 / 2 : 0) + (this.euro1 ? this.euro1 : 0) + (this.euro2 ? this.euro2 * 2 : 0) + (this.euro5 ? this.euro5 * 5 : 0) + (this.euro10 ? this.euro10 * 10 : 0) + (this.euro20 ? this.euro20 * 20 : 0) + (this.euro50 ? this.euro50 * 50 : 0) + (this.euro100 ? this.euro100 * 100 : 0) + (this.papel ? this.papel : 0);

  }

  validateFormat(event: any) {
    let key;
    if (event.type === 'paste') {
      key = event.clipboardData.getData('text/plain');
    } else {
      key = event.keyCode;
      key = String.fromCharCode(key);
    }
    const regex = /[0-9]/;
    if (!regex.test(key)) {
      event.returnValue = false;
      if (event.preventDefault) {
        event.preventDefault();
      }
    }
  }

}
