import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  	<h1>{{title}}</h1>
  	<my-heroes></my-heroes>
  `
  ,
  styles: [`
    
  `]
})

export class AppComponent { 
	title = 'Tour of Heroes';
	
}