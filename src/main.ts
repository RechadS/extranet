import { bootstrap } from '@angular/platform-browser-dynamic';
import { provide } from '@angular/core';
import { ROUTER_PROVIDERS } from '@angular/router';

import { enableProdMode } from '@angular/core';
import { ExtranetAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(ExtranetAppComponent, [ROUTER_PROVIDERS]);
