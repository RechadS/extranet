import { provideRouter, RouterConfig } from '@angular/router';
import {LoginComponent} from './login';
import {appPrivateRouterProviders} from './private/private.routes';


const routes: RouterConfig = [
  ...appPrivateRouterProviders,
  { path: 'login', component: LoginComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];