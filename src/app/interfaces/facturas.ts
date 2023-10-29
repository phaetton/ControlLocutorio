import { Abono } from "./abono";
import { Listacompra } from "./listacompra";

export interface Factura {
    id?: string,
    cliente?: string,
    listacompra?: Listacompra[],
    fecha?: number,
    descuento?: number,
    tipoventa?:string //fiado, apartado, alcash
    totalvendido?:number,
    abono?:Abono[],
}
