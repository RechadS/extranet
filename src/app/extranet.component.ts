import { Component } from '@angular/core';
import {RouteConfig, RouterLink, Router} from '@angular/router-deprecated';

import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {LoggedInRouterOutlet} from './LoggedInRouterOutlet.directive';

@Component({
  moduleId: module.id,
  selector: 'extranet-app',
  templateUrl: 'extranet.component.html',
  styleUrls: ['extranet.component.css'],
  directives: [LoggedInRouterOutlet]
})

@RouteConfig([
  { path: '/', redirectTo: ['/Home'] },
  { path: '/home', component: HomeComponent, as: 'Home' },
  { path: '/login', component: LoginComponent, as: 'Login' }
])

export class ExtranetAppComponent {
  title = 'extranet works!';
  constructor() {}
}
