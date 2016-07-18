import { bootstrap } from '@angular/platform-browser-dynamic';
import { provide } from '@angular/core';
import { enableProdMode } from '@angular/core';
import { appRouterProviders } from './app/extranet.routes';
import { ExtranetAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(ExtranetAppComponent, [
  appRouterProviders
])
.catch(err => console.error(err));

