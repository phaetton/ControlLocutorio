import { Productos } from "./productos"

export interface Listacompra {
    id?:string,
    producto:Productos,
    cantidadCompra: number,
}
