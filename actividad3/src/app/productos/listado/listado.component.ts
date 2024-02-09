import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { Producto } from '../productos.module';
import { ProductoService } from '../../services/productos.service';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  productos:Producto[]=[];

  eliminado: Producto|null|undefined = null;
  encontrado: boolean=true;

  datosFormulario:string="";

  constructor(private _productosServicios:ProductoService){
    this.productos = _productosServicios.getProductos();
    this._productosServicios.productosChanged.subscribe(()=>{
      this.productos=_productosServicios.getProductos();
    });
  }

  eliminar(producto:string):void {

    this.eliminado=this._productosServicios.eliminar(producto);
    this.encontrado = (this.eliminado!=null);

    setTimeout(() => {
      this.eliminado = null;
      this.encontrado = true;
    }, (1000));
  }
}
