import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector:'pm-root',
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent{ 
  pageTitle:string = 'Product World';
  title:string='Welcome to My Exhibition'
}
