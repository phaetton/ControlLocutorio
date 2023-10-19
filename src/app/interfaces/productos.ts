export interface Productos {
    id?: string,
    nombre: string,
    precio: number,
    cantidad: number,
    img: string,
    categoria?: number[],
    subcategoria?: number[],
    activo: boolean
}
