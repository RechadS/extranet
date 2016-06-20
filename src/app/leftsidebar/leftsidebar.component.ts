import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {AuthenticationService} from '../authentication.service';

@Component({
  moduleId: module.id,
  selector: 'leftsidebar',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'leftsidebar.component.html',
  styleUrls: ['leftsidebar.component.css']
})

export class LeftsidebarComponent implements OnInit {

  constructor(private _service:AuthenticationService) {}

  ngOnInit() {
  }

  logout() {
    this._service.logout();
  }
}
