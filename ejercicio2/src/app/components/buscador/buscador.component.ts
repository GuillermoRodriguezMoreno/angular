import { Component } from '@angular/core';
import { Lenguaje, LenguajesService } from '../../services/lenguajes.service';
import { ActivatedRoute } from '@angular/router';

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
              private activatedRoutes:ActivatedRoute){

  }
}
