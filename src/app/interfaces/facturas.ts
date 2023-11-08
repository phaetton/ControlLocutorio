import { Abono } from "./abono";
import { Listacompra } from "./listacompra";

export interface Factura {
    id?: string,
    cliente?: string,
    listacompra?: Listacompra[],
    fechaCompra?: number,
    fechaProximoPago?:number,
    descuento?: number,
    tipoventa?:string //fiado, apartado, alcash
    estadoventa?:string //Debe, Mora, Pagado
    totalvendido?:number,
    abono?:Abono[],
    
}
