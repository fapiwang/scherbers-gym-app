import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-merchandise",
  templateUrl: "./merchandise.component.html",
  styleUrls: ["./merchandise.component.scss"],
})
export class MerchandiseComponent implements OnInit {
  selectedSize: string = "";
  orderMode: boolean = false;

  onOrderSize(event) {
    this.selectedSize = event;
    this.orderMode = true;
  }

  createOrder() {
    this.orderMode = false;
  }

  constructor() {}

  ngOnInit() {}
}
