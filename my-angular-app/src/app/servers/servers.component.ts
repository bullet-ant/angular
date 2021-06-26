import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  // template: `
  //   <app-server></app-server>
  // `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  addServer = false;

  addServerMessage = "No server added yet!";

  constructor() {
    setTimeout(() => {
      this.addServer = true;
    }, 3000);
  }

  ngOnInit(): void { }

  onAddServer() {
    this.addServerMessage = "Yayy! Added a server!";
  }
}
