import { Component } from '@angular/core';
import { ProductoService } from '../../services/productoService';
import { Producto } from '../productos.interface';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  productosAñadir:Producto[] = this.productoService.getProductos(); 

  constructor(private productoService:ProductoService){};

  añadirProducto(prod_id, prod_nombre){
    
    prod:Producto = {
      id:prod_id,
      nombre:prod_nombre
    }

    this.productosAñadir.push(prod);
  }
}
