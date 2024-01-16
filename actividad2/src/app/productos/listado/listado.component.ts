import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {

  productos:any[] = [

    { nombre: 'Teclado', precio: 10, categoria: 'Electrónica' },
    { nombre: 'Camiseta', precio: 20, categoria: 'Ropa' },
    { nombre: 'Cuadro', precio: 15 },
    { nombre: 'Sudadera', precio: 25, categoria: 'Ropa' },
    { nombre: 'Pantalon', precio: 30, categoria: 'Ropa' },
    { nombre: 'Impresora', precio: 120, categoria: 'Electrónica' }

  ];

  eliminados:String = "";

  eliminarProducto(index: number): void {

    const productoEliminado = this.productos.splice(index, 1);
    this.eliminados = this.eliminados.concat(" " + productoEliminado[0].nombre);
  }
}
