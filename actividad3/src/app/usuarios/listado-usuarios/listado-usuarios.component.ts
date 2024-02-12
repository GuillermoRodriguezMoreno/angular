import { Component } from '@angular/core';
import { Usuario } from '../usuario.interface';
import { UsuariosService } from '../../services/usuarios.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listado-usuarios',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './listado-usuarios.component.html',
  styleUrl: './listado-usuarios.component.css'
})
export class ListadoUsuariosComponent {

  usuarios:Usuario[] = [];
  eliminado:Usuario|null|undefined = null;
  encontrado:boolean=true;

  datosFormulario:string="";

  constructor(private _usuariosService:UsuariosService){
    this.usuarios=_usuariosService.getUsuarios();
    this._usuariosService.usuariosChanged.subscribe(()=>{
      this.usuarios=_usuariosService.getUsuarios();
    })
  }

  eliminar(usuario:string):void{

    this.eliminado=this._usuariosService.eliminar(usuario);
    this.encontrado=this.eliminado!=null;

    setTimeout(()=>{
      this.eliminado=null
      this.encontrado=true;
    }, (1000));
  }
}
