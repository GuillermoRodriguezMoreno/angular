import { Component } from '@angular/core';
import { Lenguaje, LenguajesService } from '../../services/lenguajes.service';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {
  lenguajes:Lenguaje[] = [];

  constructor(private lenguajesServicio:LenguajesService,
              ){

  }
}
