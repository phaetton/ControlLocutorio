import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente';
import { Factura } from 'src/app/interfaces/facturas';
import { Listacompra } from 'src/app/interfaces/listacompra';
import { Productos } from 'src/app/interfaces/productos';
import { ClientesService } from 'src/app/services/clientes.service';
import { FacturasService } from 'src/app/services/facturas.service';
import { ListacompraService } from 'src/app/services/listacompra.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-facturar',
  templateUrl: './facturar.component.html',
  styleUrls: ['./facturar.component.scss']
})
export class FacturarComponent {

  tipocliente: string = "anonimo";
  formularionuevo!: FormGroup;
  imageSrc: any;
  today = new Date();
  fecha = this.today.getTime();
  gracias: boolean = false;

  envio: boolean = false;
  factura!: Factura;
  descuento: any;
  listacompras: Listacompra[] = [];
  productos:Productos[]=[];
  reducido: any[] = [];

  constructor(private rutaactiva: ActivatedRoute,
    private listacomprasvc: ListacompraService,
    private fb: FormBuilder,
    private clientesvc: ClientesService,
    private facturasvc: FacturasService,
    private productosvc:ProductosService
  ) {
    this.listacompras = this.listacomprasvc.listacompras;
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

  crearFormulario() {
    this.formularionuevo = this.fb.group({
      nombre: new FormControl("", Validators.required),
      email: new FormControl(""),
      foto: new FormControl(""),
      celular: new FormControl(""),
    });
  }

  enviaranonimo() {
    // this.envio = true;

    this.listacompras.map(m => {

      this.productosvc.updateProductos(m);


      this.reducido.push(
        {
          'nombre': m.nombre,
          'precio': m.precio,
          'id': m.id,
          'cantidadCompra': m.cantidadCompra,
        }
      );
    })

    this.factura = {
      cliente: 'Anonimo',
      listacompra: this.reducido,
      tipoventa: 'Compra Directa',
      abono: [{
        fecha: this.fecha,
        cantidad: this.calculartotalcompra(),
        descuento: this.descuento
      }],
    };

    this.facturasvc.addfactura(this.factura).then(m => {
      this.gracias = true;
      this.envio = false;
    }
    );

  }

  async onSubmit() {
    this.envio = true;
    this.formularionuevo.patchValue({
      foto: this.imageSrc ? this.imageSrc : "",
    })




    await this.clientesvc.addCliente(this.formularionuevo.value).then(m => {

      this.envio = false
      console.log(m['id']);

      this.factura = {
        cliente: m['id'],
        listacompra: this.listacompras,
        fecha: this.fecha,
        descuento: this.descuento,
        tipoventa: 'Compra Directa',
        abono: [{
          fecha: this.fecha,
          cantidad: this.calculartotalcompra(),
          descuento: this.descuento
        }],
      };

      console.log(this.factura);
      this.facturasvc.addfactura(this.factura);

      this.formularionuevo.reset();

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
