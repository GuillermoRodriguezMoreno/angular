import { Component } from '@angular/core';
import { CabeceraModule } from '../../cabecera/cabecera.module';
import { ListadoComponent } from '../listado/listado.component';
import { FormularioComponent } from '../formulario/formulario.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ListadoComponent, FormularioComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
