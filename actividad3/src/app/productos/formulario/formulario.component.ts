import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { ProductoService } from '../../services/productos.service';
import { Producto } from '../productos.interface';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  datosFormulario:Producto = {
    nombre: "",
    precio: 0,
    categoria: ""
  }

  constructor(private productoService:ProductoService){}

  onSubmit(f:NgForm){
    this.productoService.crear(this.datosFormulario);
  };
}
