import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LenguajesComponent } from './components/lenguajes/lenguajes.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { LenguajeComponent } from './components/lenguaje/lenguaje.component';

export const routes: Routes = [

    {path: "home", component: HomeComponent},
    {path: "about", component: AboutComponent},
    {path: "lenguajes", component: LenguajesComponent},
    {path: "lenguaje/:id", component: LenguajeComponent},
    {path: "buscador/:termino", component: BuscadorComponent},
    {path: "**", pathMatch: "full", redirectTo: "home"}
];
