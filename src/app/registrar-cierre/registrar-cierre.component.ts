import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrodiarioService } from '../services/registrodiario.service';

@Component({
  selector: 'app-registrar-cierre',
  templateUrl: './registrar-cierre.component.html',
  styleUrls: ['./registrar-cierre.component.scss']
})
export class RegistrarCierreComponent {

  formulario!: FormGroup;
  totalmonedas = 0;

  constructor(private fb: FormBuilder, private registroSvc: RegistrodiarioService) {
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  get f() {
    return this.formulario.value;
  }

  crearFormulario() {
    this.formulario = this.fb.group({
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
      bari: new FormControl("", Validators.compose([Validators.maxLength(10), Validators.pattern('/^[1-9]')])),
      bare: new FormControl("", Validators.compose([Validators.maxLength(10), Validators.pattern('/^[1-9]')])),
      barpre: new FormControl("", Validators.compose([Validators.maxLength(10), Validators.pattern('/^[1-9]')])),
      barco: new FormControl("", Validators.compose([Validators.maxLength(10), Validators.pattern('/^[1-9]')])),
      jefei: new FormControl("", Validators.compose([Validators.maxLength(10), Validators.pattern('/^[1-9]')])),
      jefee: new FormControl("", Validators.compose([Validators.maxLength(10), Validators.pattern('/^[1-9]')])),
      compra: new FormControl("", Validators.compose([Validators.maxLength(10), Validators.pattern('/^[1-9]')])),
      comentario: new FormControl(""),


    });
  }


  get centimo1() {
    return this.f['centimo1'] ? parseInt(this.f['centimo1']) / 100 : 0;
  }
  get centimo2() {
    return this.f['centimo2'] ? parseInt(this.f['centimo2']) / 50 : 0;
  }
  get centimo5() {
    return this.f['centimo5'] ? parseInt(this.f['centimo5']) / 20 : 0;
  }
  get centimo10() {
    return this.f['centimo10'] ? parseInt(this.f['centimo10']) / 10 : 0;
  }
  get centimo20() {
    return this.f['centimo20'] ? parseInt(this.f['centimo20']) / 5 : 0;
  }
  get centimo50() {
    return this.f['centimo50'] ? parseInt(this.f['centimo50']) / 2 : 0;
  }
  get euro1() {
    return this.f['euro1'] ? parseInt(this.f['euro1']) : 0;
  }
  get euro2() {
    return this.f['euro2'] ? parseInt(this.f['euro2']) * 2 : 0;
  }
  get euro5() {
    return this.f['euro5'] ? parseInt(this.f['euro5']) * 5 : 0;
  }
  get euro10() {
    return this.f['euro10'] ? parseInt(this.f['euro10']) * 10 : 0;
  }
  get euro20() {
    return this.f['euro20'] ? parseInt(this.f['euro20']) * 20 : 0;
  }
  get euro50() {
    return this.f['euro50'] ? parseInt(this.f['euro50']) * 50 : 0;
  }
  get euro100() {
    return this.f['euro100'] ? parseInt(this.f['euro100']) * 100 : 0;
  }
  get papel() {
    return this.f['papel'] ? parseInt(this.f['papel']) : 0;
  }


  get bari() {
    return this.f['bari'] ? this.f['bari'] : 0;
  }
  get bare() {
    return this.f['bare'] ? this.f['bare'] : 0;
  }
  get barpre() {
    return this.f['barpre'] ? this.f['barpre'] : 0;
  }
  get barco() {
    return this.f['barco'] ? this.f['barco'] : 0;
  }
  get jefei() {
    return this.f['jefei'] ? this.f['jefei'] : 0;
  }
  get jefee() {
    return this.f['jefee'] ? this.f['jefee'] : 0;
  }


  get cantidadmonedas() {
    return (this.centimo1 ? this.centimo1 / 100 : 0) + (this.centimo2 ? this.centimo2 / 50 : 0) + (this.centimo5 ? this.centimo5 * 20 : 0) + (this.centimo10 ? this.centimo10 / 10 : 0) + (this.centimo20 ? this.centimo20 / 5 : 0) + (this.centimo50 ? this.centimo50 / 2 : 0) + (this.euro1 ? this.euro1 : 0) + (this.euro2 ? this.euro2 * 2 : 0) + (this.euro5 ? this.euro5 * 5 : 0) + (this.euro10 ? this.euro10 * 10 : 0) + (this.euro20 ? this.euro20 * 20 : 0) + (this.euro50 ? this.euro50 * 50 : 0) + (this.euro100 ? this.euro100 * 100 : 0) + (this.papel ? this.papel : 0);

  }


  get cantidadbarberia() {
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


  async onSubmit() {
    const response = await this.registroSvc.addRegistroDiario(this.formulario.value);
    console.log(response);

  }
}
