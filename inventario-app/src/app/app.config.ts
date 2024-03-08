import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { ProductService } from './product.service';

export const appConfig: ApplicationConfig = {
  providers: [
    ProductService,
    provideRouter(routes),
    provideHttpClient(),
    provideClientHydration(),
  ],
};
