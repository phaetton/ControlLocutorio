import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente';
import { Listacompra } from 'src/app/interfaces/listacompra';
import { ClientesService } from 'src/app/services/clientes.service';
import { ListacompraService } from 'src/app/services/listacompra.service';

@Component({
  selector: 'app-facturar',
  templateUrl: './facturar.component.html',
  styleUrls: ['./facturar.component.scss']
})
export class FacturarComponent {
  
  // registrar cliente
  formularionuevo!: FormGroup;
  envio: boolean = false;
  imageSrc: any;

  descuento: any;
  listacompras: Listacompra[] = [
    {
      "precio": 6, "activo": true, "categoria": ["gaKpNYTxDRCS6jOzNhdA"],
      "img": "../assets/imagen/predefinida.jpg", "nombre": "nuevo", "cantidad": 4, "subcategoria": ["eC69T9PBGdAaPRxujunS"], "id": "uuqdAwHPzN7merckqIxR", "cantidadCompra": 5
    }, {
      "cantidad": 4, "activo": true, "precio": 333, "nombre": "dfsfd", "subcategoria": ["qz0AI9Cvf2hBY52Wvfhc", "eC69T9PBGdAaPRxujunS", "6SEZCAIyPMrpY2aer9k8"], "categoria": ["rS6yTCA36dCNv0cJsX4E", "gaKpNYTxDRCS6jOzNhdA"],
      "img": "../assets/imagen/predefinida.jpg", "id": "PjsU98LU9gXiqBxrmESw", "cantidadCompra": 5
    }, {
      "activo": true, "categoria": ["rS6yTCA36dCNv0cJsX4E"],
      "img": "../assets/imagen/predefinida.jpg", "precio": 4, "subcategoria": ["qz0AI9Cvf2hBY52Wvfhc"], "cantidad": 0, "nombre": "yyy", "id": "7upybCo98inBv2nQpFFm", "cantidadCompra": 1
    }];
  tipocliente: string = "nuevo";





  constructor(private rutaactiva: ActivatedRoute,
    private listacomprasvc: ListacompraService,
    private fb: FormBuilder,
    private clientesvc: ClientesService) {
      // this.listacompras = this.listacomprasvc.listacompras;
      this.crearFormulario();
  }

  calcularCantidadcompra() {
    return this.listacompras.reduce((acumulador, producto) => acumulador + producto.cantidadCompra, 0);
  }

  calculartotalcompra() {
    return this.listacompras.reduce((acumulador, producto) => acumulador + (producto.precio * producto.cantidadCompra), 0);
  }

  eliminarCompra(producto: Listacompra) {
    this.listacompras.splice(this.listacompras.indexOf(producto), 1)
  }


  ngOnInit(): void {
    this.rutaactiva.params.subscribe(parametro => {

      this.descuento = parametro['descuento'];
    })
  }


  get f() {
    return this.formularionuevo.value;
  }

  // fecha: new FormControl(this.today.getTime()),
  crearFormulario() {
    this.formularionuevo = this.fb.group({
      nombre: new FormControl("", Validators.required),
      email: new FormControl(""),
      foto: new FormControl(""),
      celular: new FormControl(""),
    });
  }



  async onSubmit() {
    this.envio = true;
    this.formularionuevo.patchValue({
      foto: this.imageSrc?this.imageSrc:"",
    })

   await this.clientesvc.addCliente(this.formularionuevo.value).then(m => {
      this.formularionuevo.reset();
      this.envio = false
      console.log(m);
      console.log(m['id']);
    });
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
  async onClickDelete(registro: Cliente) {
    const response = await this.clientesvc.deleteCliente(registro);
  }

}
