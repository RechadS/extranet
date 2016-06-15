import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {ROUTER_DIRECTIVES, OnActivate} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'login-form',
  providers: [AuthenticationService],
  templateUrl: 'private.component.html',
  styleUrls: ['private.component.css']
})
export class PrivateComponent implements OnInit {

  	constructor(
	    private _service:AuthenticationService){
  		 
  	}

  	onActivate(next){
  		this._service.checkCredentials();
  	}

	ngOnInit(){
	   
	}

	logout() {
	    this._service.logout();
	}

}
