import { Component } from '@angular/core';
import { ListadoUsuariosComponent } from '../listado-usuarios/listado-usuarios.component';
import { FormularioUsuariosComponent } from '../formulario-usuarios/formulario-usuarios.component';

@Component({
  selector: 'app-main-usuarios',
  standalone: true,
  imports: [ListadoUsuariosComponent, FormularioUsuariosComponent],
  templateUrl: './main-usuarios.component.html',
  styleUrl: './main-usuarios.component.css'
})
export class MainUsuariosComponent {

}
