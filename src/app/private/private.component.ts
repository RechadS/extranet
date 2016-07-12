import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import { LeftsidebarComponent } from '../leftsidebar'; 
import { HomeComponent } from '../home';
import { AddDeclarationComponent } from '../add-declaration';
import { ListDeclarationComponent } from '../list-declaration';
import { DocumentationComponent } from '../documentation';
import { ClientComponent } from '../client';
import { ContratComponent } from '../contrat';
import { ContactComponent } from '../contact';
import {Routes, Router, ROUTER_DIRECTIVES, OnActivate} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'login-form',
  providers: [AuthenticationService],
  templateUrl: 'private.component.html',
  styleUrls: ['private.component.css'],
  directives: [LeftsidebarComponent, ROUTER_DIRECTIVES]
})

@Routes([
  { path: '/home', component: HomeComponent},
  { path: '/declarer', component: AddDeclarationComponent},
  { path: '/declarations', component: ListDeclarationComponent},
  { path: '/documentation', component: DocumentationComponent},
  { path: '/client', component: ClientComponent},
  { path: '/contact', component: ContactComponent}
])

export class PrivateComponent implements OnInit {

  	constructor(
	    private _service:AuthenticationService, private router:Router){
  		
  	}

	ngOnInit(){
	   this._service.checkCredentials();
	}

	logout() {
	    this._service.logout();
	}

}
