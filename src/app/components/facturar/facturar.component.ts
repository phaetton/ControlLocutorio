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
  descuento: number = 0;
  listacompras: Listacompra[] = [];
  reducido: Listacompra[] = [];

  formulariocliente: Cliente = {};

  constructor(private rutaactiva: ActivatedRoute,
    private listacomprasvc: ListacompraService,
    private fb: FormBuilder,
    private clientesvc: ClientesService,
    private facturasvc: FacturasService,
    private productosvc: ProductosService
  ) {
    this.listacomprasvc.getListacompra().subscribe(m => this.listacompras = m);
    this.crearFormulario();
  }


  calculartotalcompra() {
    return this.listacompras.reduce((acumulador, listacompra) => acumulador + (listacompra.producto.precio * listacompra.cantidadCompra), 0);
  }

  eliminarCompra(producto: Listacompra) {
    this.listacompras.splice(this.listacompras.indexOf(producto), 1)
  }

  ngOnInit(): void {
    this.rutaactiva.params.subscribe(parametro => {
      this.descuento = parametro['descuento'];
    })
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
    this.envio = true;

    const minicarrito = this.listacompras.map(item => {
      const miniproducto = { ...item.producto };
      delete miniproducto.img;
      delete miniproducto.categoria;
      delete miniproducto.subcategoria;
      delete miniproducto.cantidad;

      return { ...item, producto: miniproducto };
    });


    this.factura = {
      cliente: 'Anonimo',
      listacompra: minicarrito,
      tipoventa: 'Compra Directa',
      totalvendido: this.calculartotalcompra(),
      abono: [{
        fecha: this.fecha,
        cantidad: this.calculartotalcompra(),
        descuento: this.descuento
      }],
    };



    this.facturasvc.addfactura(this.factura).then(m => {
      this.listacompras.map(m => this.listacomprasvc.deleteListacompra(m)
      )
      this.gracias = true;
      this.envio = false;
    }
    );

  }



  enviarNuevo() {
    this.envio = true;

    const minicarrito = this.listacompras.map(item => {
      const miniproducto = { ...item.producto };
      delete miniproducto.img;
      delete miniproducto.categoria;
      delete miniproducto.subcategoria;
      delete miniproducto.cantidad;

      return { ...item, producto: miniproducto };
    });




    this.clientesvc.addCliente(this.formulariocliente).then(response => {
      console.log(response.id);
      console.log(response);

      this.factura = {
        cliente: response.id,
        listacompra: minicarrito,
        tipoventa: 'Compra Directa',
        totalvendido: this.calculartotalcompra(),
        abono: [{
          fecha: this.fecha,
          cantidad: this.calculartotalcompra(),
          descuento: this.descuento
        }],
      };



      this.facturasvc.addfactura(this.factura).then(m => {
        this.listacompras.map(m => this.listacomprasvc.deleteListacompra(m)
        )
        this.gracias = true;
        this.envio = false;
      }
      );
    });




  }
  async onSubmit() {
  }


  onFormularioCliente(formcliente: Cliente) {
    this.formulariocliente = { ...formcliente };
  }

}
