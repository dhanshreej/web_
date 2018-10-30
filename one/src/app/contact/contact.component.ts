import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

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


}
