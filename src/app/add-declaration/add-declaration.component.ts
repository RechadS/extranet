import { Component, OnInit } from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';

declare var classie: any;
declare var SelectFxJs: any;
declare var inputlabel: any;


export class Declaration {
  constructor(public raisonsociale: string, public siret: string, public nomcontact: string, 
  	public origine: string, public dateContact: string, public dateSignature: string) { }
}

@Component({
  moduleId: module.id,
  selector: 'add-declaration',
  templateUrl: 'add-declaration.component.html',
  styleUrls: ['add-declaration.component.css'],
  directives: [ROUTER_DIRECTIVES] 
})
export class AddDeclarationComponent implements OnInit {

	public declaration = new Declaration('', '', '', '', '', '');

  constructor(router:Router) {}

  ngOnInit() {
  	inputlabel.inputlabelcheck();
    
  }

}
