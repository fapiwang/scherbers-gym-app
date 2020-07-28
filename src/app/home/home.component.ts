import { Component, OnInit } from "@angular/core";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  faInstagram = faInstagram;

  constructor() {}

  ngOnInit() {}

  routerWhatsapp() {
    document.location.href =
      "https://api.whatsapp.com/send?phone=4917657937429";
  }
}
