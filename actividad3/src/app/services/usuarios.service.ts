import { EventEmitter, Injectable } from '@angular/core';
import { Usuario } from '../usuarios/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private _usuarios:Usuario[]=[
    {id:1, nombre: "Guillermo", edad: 29, profesion: "sin profesion"},
    {id:2, nombre: "Pedro", edad: 25, profesion: "cocinero"},
    {id:3, nombre: "Juan", edad: 22, profesion: "informatico"},
    {id:4, nombre: "Pablo", edad: 24, profesion: "camarero"}

  ];

  usuariosChanged:EventEmitter<null>;
  
  constructor() {
    this.usuariosChanged=new EventEmitter;
   }

  getUsuarios():Usuario[]{
    return Array.from(this._usuarios);
  }

  eliminar(usuario:string):Usuario|null{
    let usuarioEliminado:Usuario|null;
    let pos=this._usuarios.findIndex((x)=> x.nombre.toLocaleLowerCase() == usuario.toLocaleLowerCase() );
    if(pos>=0) {
      usuarioEliminado = this._usuarios[pos];
      this._usuarios.splice(pos, 1);
      this.usuariosChanged.emit();
    } else {
      usuarioEliminado=null;
    }
    return usuarioEliminado;
  }

  crear(datos:Usuario){

    this._usuarios.push({...datos});
    this.usuariosChanged.emit();
  }
}
