import { Component, OnInit } from '@angular/core';
import {Router, ROUTER_DIRECTIVES, OnActivate} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'content',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [ROUTER_DIRECTIVES] 
})

export class HomeComponent{


  constructor(router:Router) {
  }

  ngOnInit(){

  }

}
