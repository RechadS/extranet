import { Component, OnInit } from '@angular/core';
import { Router }              from '@angular/router';
import {AuthenticationService} from '../authentication.service';
import { LeftsidebarComponent } from '../leftsidebar'; 
import {ROUTER_DIRECTIVES} from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'login-form',
  providers: [AuthenticationService],
  templateUrl: 'private.component.html',
  styleUrls: ['private.component.css'],
  directives: [LeftsidebarComponent, ROUTER_DIRECTIVES]
})


export class PrivateComponent implements OnInit {

  	constructor(private router: Router,
	    private _service:AuthenticationService){
  		
  	}

	ngOnInit(){
	   this._service.checkCredentials();
	}

	logout() {
	    this._service.logout();
	}

}
