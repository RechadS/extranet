import { Component } from '@angular/core';
import { LeftsidebarComponent } from './leftsidebar'; 

@Component({
  moduleId: module.id,
  selector: 'extranet-app',
  templateUrl: 'extranet.component.html',
  styleUrls: ['extranet.component.css'],
  directives: [LeftsidebarComponent]
})
export class ExtranetAppComponent {
  title = 'extranet works!';
}
