import { Component, OnInit } from '@angular/core';

import { LeftsidebarComponent } from '../leftsidebar'; 

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [LeftsidebarComponent]
})

export class HomeComponent implements OnInit {


  constructor() {
    
  }


  ngOnInit() {
  }

}
