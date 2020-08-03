import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-merchandise",
  templateUrl: "./merchandise.component.html",
  styleUrls: ["./merchandise.component.scss"],
})
export class MerchandiseComponent implements OnInit {
  selectedArticle: string = "";
  selectedSize: string = "";
  selectedPrice: string = "";
  orderMode: boolean = false;

  onOrderArticle(event) {
    this.selectedArticle = event;
    this.orderMode = true;
  }

  onOrderSize(event) {
    this.selectedSize = event;
    this.orderMode = true;
  }

  onOrderPrice(event) {
    this.selectedPrice = event;
    this.orderMode = true;
  }

  createOrder() {
    this.orderMode = false;
  }

  constructor() {}

  ngOnInit() {}
}
