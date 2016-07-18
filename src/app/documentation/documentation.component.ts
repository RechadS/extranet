import { Component, OnInit } from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-documentation',
  templateUrl: 'documentation.component.html',
  styleUrls: ['documentation.component.css'],
  directives: [ROUTER_DIRECTIVES] 
})
export class DocumentationComponent implements OnInit {

  constructor(router: Router) {}

  ngOnInit() {
  }

}
