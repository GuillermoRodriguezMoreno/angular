import { Component } from '@angular/core';
import { Lenguaje, LenguajesService } from '../../services/lenguajes.service';
import { ActivatedRoute } from '@angular/router';
import { NgFor } from '@angular/common';
import { LenguajeTarjetaComponent } from '../lenguaje-tarjeta/lenguaje-tarjeta.component';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [NgFor, LenguajeTarjetaComponent],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {
  lenguajes:Lenguaje[] = [];

  constructor(private lenguajesServicio:LenguajesService,
              private activatedRoutes:ActivatedRoute){

    activatedRoutes.params.subscribe(params => {

      this.lenguajes=lenguajesServicio.buscarLenguajes(params["termino"]);
    })
  }

  rutaImagen(nombre:string):string{
    return this.lenguajesServicio.rutaImagen(nombre);
  }
}
