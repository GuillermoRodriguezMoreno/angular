import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { Producto } from '../productos.module';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
 
  eliminado: Producto|null = null;
  encontrado:boolean = true;


}
