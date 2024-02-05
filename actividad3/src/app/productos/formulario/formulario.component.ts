import { Component } from '@angular/core';
import { ProductoService } from '../../services/productos.service';
import { Producto } from '../productos.interface';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  productoAñadir:Producto|null = null; 

  constructor(private productoService:ProductoService){};

  onSubmit(){};
}
