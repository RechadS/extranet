import { Component, OnInit } from '@angular/core';
import {Router, ROUTER_DIRECTIVES, OnActivate} from '@angular/router';

export class Logiciel {
  constructor(public nom: string, public type: string, public description: string, 
  	public origine: string, public dateContact: string, public dateSignature: string) { }
}

@Component({
  moduleId: module.id,
  selector: 'app-logiciel',
  templateUrl: 'logiciel.component.html',
  styleUrls: ['logiciel.component.css']
})
export class LogicielComponent implements OnInit {

  constructor(router: Router) {}

  ngOnInit() {
  }

}
