import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioUsuariosComponent } from './formulario-usuarios/formulario-usuarios.component';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { MainUsuariosComponent } from './main-usuarios/main-usuarios.component';
export { Usuario } from './usuario.interface';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListadoUsuariosComponent,
    MainUsuariosComponent,
    FormularioUsuariosComponent
  ],
  exports:[
    FormularioUsuariosComponent, ListadoUsuariosComponent, MainUsuariosComponent
  ]
})
export class UsuariosModule { }
