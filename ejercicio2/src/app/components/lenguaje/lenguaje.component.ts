import { Component, Input } from '@angular/core';
import { Lenguaje, LenguajesService } from '../../services/lenguajes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lenguaje',
  standalone: true,
  imports: [],
  templateUrl: './lenguaje.component.html',
  styleUrl: './lenguaje.component.css'
})
export class LenguajeComponent {

  @Input()
  lenguaje:Lenguaje|null = null;
  @Input()
  rutaImagen:string = "";

  constructor(private lenguajesServicio:LenguajesService,
              private activatedRoutes:ActivatedRoute){

    this.activatedRoutes.params.subscribe(params => {

      this.lenguaje=this.lenguajesServicio.buscarLenguaje(params["id"]);
      this.rutaImagen=lenguajesServicio.rutaImagen(this.lenguaje.imagen);
    })
  }
}
