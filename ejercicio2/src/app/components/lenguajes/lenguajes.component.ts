import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Lenguaje, LenguajesService } from '../../services/lenguajes.service';

@Component({
  selector: 'app-lenguajes',
  standalone: true,
  imports: [NgFor],
  templateUrl: './lenguajes.component.html',
  styleUrl: './lenguajes.component.css'
})
export class LenguajesComponent {

  lenguajes:Lenguaje[] = [];

  constructor(private _lenguajesService:LenguajesService) {
    
    this.lenguajes = _lenguajesService.getLenguajes();
  };

  rutaImagen(imagen:string):string{

    return this._lenguajesService.rutaImagen(imagen);
  }
}
