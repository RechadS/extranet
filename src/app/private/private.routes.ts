import { provideRouter, RouterConfig } from '@angular/router';
import {PrivateComponent} from '../private';
import { HomeComponent } from '../home';
import { AddDeclarationComponent } from '../add-declaration';
import { ListDeclarationComponent } from '../list-declaration';
import { DocumentationComponent } from '../documentation';
import { ClientComponent } from '../client';
import { ContratComponent } from '../contrat';
import { ContactComponent } from '../contact';

const privateroutes: RouterConfig = [
  { path: '', redirectTo: '/private/home', terminal: true},
  { path: 'private', component: PrivateComponent,
	children:[
		{ path: 'home', component: HomeComponent},
		{ path: 'declarer', component: AddDeclarationComponent},
		{ path: 'declarations', component: ListDeclarationComponent},
		{ path: 'documentation', component: DocumentationComponent},
		{ path: 'client', component: ClientComponent},
		{ path: 'contact', component: ContactComponent}
	]},
  
  
];

export const appPrivateRouterProviders = [
  provideRouter(privateroutes)
];

