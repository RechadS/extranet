import { Component } from '@angular/core';
import {Routes, Router, ROUTER_DIRECTIVES, RouterOutletMap} from '@angular/router';
import {RouterLink} from '@angular/router-deprecated';

import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {PrivateComponent} from './private';

@Component({
  moduleId: module.id,
  selector: 'extranet-app',
  templateUrl: 'extranet.component.html',
  styleUrls: ['extranet.component.css'],
  directives: [LoginComponent, ROUTER_DIRECTIVES]
})

@Routes([
  { path: '/', component: PrivateComponent},
  { path: '/login', component: LoginComponent }
])

export class ExtranetAppComponent {
  title = 'extranet works!';
  constructor() {}
}
