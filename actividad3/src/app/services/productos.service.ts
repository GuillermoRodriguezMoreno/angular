import { Injectable } from '@angular/core';
import { Producto } from '../productos/productos.interface';

@Injectable({providedIn: 'root'})
export class ProductoService {

    productos: Producto[]= [
        {nombre: "Bolígrafo", precio: 2.50, categoria: "Papelería"},
        {nombre: "Martillo", precio: 5, categoria: "Ferretería"},
        {nombre: "Cuaderno", precio: 3.50, categoria: "Papelería"},
        {nombre: "Regla", precio: 1.50, categoria: "Papelería"},
        {nombre: "Destornillador", precio: 4.50, categoria: "Ferretería"}
      ]

      eliminar(producto:string):void {
        let pos=this.productos.findIndex((item)=> item.nombre.toLowerCase() == producto.toLowerCase());
        // console.log("Eliminando " + producto + " de posición " + pos)
        if(pos>=0) {
          this.eliminado = this.productos[pos];
          this.productos.splice(pos, 1);
        }else{
          this.encontrado=false;
        }
        setTimeout(() => {
          this.eliminado = null;
          this.encontrado=true;
        }, (1000));
      }
}