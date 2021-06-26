import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: [`
    .log{
      color: white
    }
  `]
})
export class DetailsComponent implements OnInit {

  buttonClick = false;
  clickCounter = 0;
  log: number[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  toggleDetails() {
    this.clickCounter += 1;
    console.log(this.log);
    this.log.push(this.clickCounter);
    this.buttonClick = !this.buttonClick;
  }
}
