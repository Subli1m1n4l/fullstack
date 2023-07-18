import { Category } from "./Category"

export interface Producto {
    id: number
    id_categoria: Category[]
    nombreProducto: string
    caracteristicas: string
    descripcion: string
    imagen1: string
    imagen2: any
    imagen3: any
    imagen4: any
    precio: number
    precio_oferta: number
    cantidad: number
    id_status: boolean
    date_created: string
    id_subcategoria: number
}