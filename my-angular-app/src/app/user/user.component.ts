import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  username = '';

  constructor() { }

  ngOnInit(): void {
  }

  onInput(event: Event) {
    this.username = (<HTMLInputElement>event.target).value;
  }

  isDisabled() {
    if(this.username === '') {
      return false;
    } 
    return true;
  }

  resetUsername() {
    this.username = '';
  }
}
