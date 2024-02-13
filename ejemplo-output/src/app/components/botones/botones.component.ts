import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Boton } from '../boton.interface';

@Component({
  selector: 'app-botones',
  standalone: true,
  imports: [],
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.css'
})
export class BotonesComponent implements OnInit {

  //Variables de instancia de comunicación con el padre
  @Input()
  boton:Boton={id:0,texto:'',valor:0};
  @Output()
  pulsado:EventEmitter<Boton> =new EventEmitter<Boton>();
  @Input()
  desactivado:boolean=false;

  //Variables propias del componente

  constructor(){}

  ngOnInit(): void { 
  }

  botonPulsado() {
    this.pulsado.emit(this.boton);
    this.desactivado=true;
  }
}
