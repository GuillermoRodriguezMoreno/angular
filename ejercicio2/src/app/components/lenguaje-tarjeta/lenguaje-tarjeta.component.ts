import { Component, Input } from '@angular/core';
import { Lenguaje} from '../../services/lenguajes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lenguaje-tarjeta',
  standalone: true,
  imports: [],
  templateUrl: './lenguaje-tarjeta.component.html',
  styleUrl: './lenguaje-tarjeta.component.css'
})
export class LenguajeTarjetaComponent {

  @Input()
  lenguaje:Lenguaje|null = null;
  @Input()
  rutaImagen:string = "";
  @Input()
  indice:number = 0;

  constructor(private router:Router){};

  verMas(){

    this.router.navigate(["lenguaje", this.indice]);
  }
}
