import { Component, OnInit } from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.css'],
  directives: [ROUTER_DIRECTIVES] 
})
export class ContactComponent implements OnInit {

  constructor(router: Router) {}

  ngOnInit() {
  }

}
