import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ProductoService } from './services/productos.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), ProductoService]
};
