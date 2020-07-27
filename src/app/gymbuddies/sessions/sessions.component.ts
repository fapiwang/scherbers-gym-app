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
    this.sessions.push(event);
    this.sessions.sort(this.sortSessionsByDate);
    this.unfoldAddSession = false;
    this.sessionsExist = true;
  }

  sortSessionsByDate(a, b) {
    if (a.date < b.date) return -1;
    else if (a.date > b.date) return 1;
    else if (a.date == b.date && a.time < b.time) return -1;
    else if (a.date == b.date && a.time > b.time) return 1;
    else return 0;
  }

  constructor() {}

  ngOnInit() {}
}
