import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ExtranetAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(ExtranetAppComponent);
