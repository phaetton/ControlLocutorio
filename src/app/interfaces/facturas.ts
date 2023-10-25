import { Abono } from "./abono";
import { Listacompra } from "./listacompra";

export interface Factura {
    id?: string,
    cliente: string,
    listacompra?: Listacompra[],
    fecha?: string,
    descuento?: string,
    tipoventa?:string //fiado, apartado, alcash
    abono?:Abono[],
}
