import { Component } from '@angular/core';
import {LoginComponent} from './login';
import {PrivateComponent} from './private';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'extranet-app',
  templateUrl: 'extranet.component.html',
  styleUrls: ['extranet.component.css'],
  directives: [LoginComponent, ROUTER_DIRECTIVES]
})

export class ExtranetAppComponent {
	title: "extranet works !";

  constructor(router:Router) {
  }

}
