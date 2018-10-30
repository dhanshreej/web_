import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  name = 'World';
  value !: string;
  change(value: string) { this.value = value; }
  
  INR= true;
  birthday = new Date(1988, 3, 15); 
  toggle = true; 
  amount =500;
  get format()
  {
        return this.INR ? 'INR' :'USD'
  }

  toggleINRandUSD()
  {
    this.INR =!this.INR;
  }

  
  get format_date()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat_date() { this.toggle = !this.toggle; }

  num1: number = 12.638467846;
  num2: number = 0.5;
  num3: number = 2.5;
  num4: number = 0.5;
}
