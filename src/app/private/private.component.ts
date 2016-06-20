import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import { LeftsidebarComponent } from '../leftsidebar'; 
import { HomeComponent } from '../home'; 
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
  { path: '/home', component: HomeComponent}
])

export class PrivateComponent implements OnInit {

  	constructor(
	    private _service:AuthenticationService, private router:Router){
  		this.router.navigate(['private/home']);
  	}

	ngOnInit(){
	   this._service.checkCredentials();
	}

	logout() {
	    this._service.logout();
	}

}
