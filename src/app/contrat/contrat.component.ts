import { Component, OnInit } from '@angular/core';
import {Router, ROUTER_DIRECTIVES, OnActivate} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-contrat',
  templateUrl: 'contrat.component.html',
  styleUrls: ['contrat.component.css'],
  directives: [ROUTER_DIRECTIVES] 
})
export class ContratComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
