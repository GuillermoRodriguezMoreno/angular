import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ProductoService } from './services/productoService';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), ProductoService]
};
