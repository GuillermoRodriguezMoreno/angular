import { Injectable } from '@angular/core';
import { Producto } from '../productos/productos.interface';

@Injectable({providedIn: 'root'})
export class ProductoService {

    listaProductos:Producto[] = [];

    getProductos():Producto[]{
        return this.listaProductos;
    }
}