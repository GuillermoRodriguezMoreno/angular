import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Usuario } from '../usuario.interface'; 
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-formulario-usuarios',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './formulario-usuarios.component.html',
  styleUrl: './formulario-usuarios.component.css'
})
export class FormularioUsuariosComponent {

  datosFormulario:Usuario={
    id:0,
    nombre:"",
    edad:0,
    profesion:""
  }

  constructor(private usuarioService:UsuariosService){}

  onSubmit(f:NgForm){
    this.usuarioService.crear(this.datosFormulario)
  };
}
