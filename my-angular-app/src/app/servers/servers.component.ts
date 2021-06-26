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

  servers = ["Test Server 1", "Test Server 2"];

  inputMessage = '';
  addedServer = false;

  constructor() {
    setTimeout(() => {
      this.addServer = true;
    }, 3000);
  }

  ngOnInit(): void { }

  onAddServer() {
    this.addedServer = true;
    this.servers.push(this.inputMessage);
    this.addServerMessage = "Yayy! New server " + this.inputMessage + " added successfully.";
  }

  onInput(event: Event) {
    this.inputMessage = (<HTMLInputElement>event.target).value;
  }


}
