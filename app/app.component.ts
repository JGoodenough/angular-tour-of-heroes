import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  	<h1>{{title}}</h1>
  	<a routerLink="/heroes">Heroes</a>
  	<router-outlet></router-outlet>
  	<my-heroes></my-heroes>
  `
  ,
  styles: [`
    
  `]
})

export class AppComponent { 
	
	title = 'Tour of Heroes';
	
}