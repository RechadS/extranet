import { Component, OnInit } from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';


 
 

@Component({
  moduleId: module.id,
  selector: 'list-declaration',
  templateUrl: 'list-declaration.component.html',
  styleUrls: ['list-declaration.component.css'],
  directives: [ROUTER_DIRECTIVES] 
})
export class ListDeclarationComponent implements OnInit {

  constructor(router:Router) {}

  ngOnInit() {
  }

}
