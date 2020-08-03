import { Component, OnInit, Input } from "@angular/core";
import { Session } from "./session.model";

import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-sessions",
  templateUrl: "./sessions.component.html",
  styleUrls: ["./sessions.component.scss"],
})
export class SessionsComponent implements OnInit {
  sessions: Session[] = [];
  faPlusCircle = faPlusCircle;
  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;
  faMapMarkerAlt = faMapMarkerAlt;

  unfoldAddSession: boolean = false;
  sessionsExist: boolean = false;
  cardUnfolded: boolean[] = new Array(this.sessions.length);

  addSession() {
    this.unfoldAddSession = true;
  }

  getSessions(event) {
    this.sessions.push(event);
    this.sessions.sort(this.sortSessionsByDate);
    this.unfoldAddSession = false;
    this.sessionsExist = true;
    this.cardUnfolded.push(false);
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
