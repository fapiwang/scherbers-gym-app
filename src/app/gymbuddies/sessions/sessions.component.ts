import { Component, OnInit, Input } from "@angular/core";
import { Session } from "./session.model";

import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-sessions",
  templateUrl: "./sessions.component.html",
  styleUrls: ["./sessions.component.scss"],
})
export class SessionsComponent implements OnInit {
  sessions: Session[] = [];
  faPlusCircle = faPlusCircle;

  unfoldAddSession: boolean = false;
  sessionsExist: boolean = false;

  addSession() {
    this.unfoldAddSession = true;
  }

  getSessions(event) {
    for (let i = 0; i < event.length; i++) {
      this.sessions[i] = event[i];
    }
    this.unfoldAddSession = false;
    this.sessionsExist = true;
  }

  constructor() {}

  ngOnInit() {}
}
