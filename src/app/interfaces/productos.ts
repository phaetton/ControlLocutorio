export interface Productos {
    id?: string,
    nombre: string,
    precio: number,
    cantidad: number,
    img: string,
    categoria?: string[],
    subcategoria?: string[],
    activo: boolean
}
