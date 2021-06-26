import { Component } from "@angular/core";

@Component({
    selector: "app-server",
    templateUrl: "./server.component.html",
    styles: [`
        .online {
            color: white;
        }
    `]
})
export class ServerComponent {
    serverId = 10;
    serverStatus = "offline";

    constructor() {
        this.serverId = Math.round(Math.random() * 10);

        if (Math.random() > 0.5) {
            this.serverStatus = "online";
        }
    }
    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === "online" ? "green" : "red";
    }
}