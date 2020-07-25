import { Component, OnInit } from "@angular/core";

interface MerchArticles {
  id: string;
  viewValue: string;
}

interface Sizes {
  id: string;
  viewValue: string;
}

@Component({
  selector: "app-merch-articles",
  templateUrl: "./merch-articles.component.html",
  styleUrls: ["./merch-articles.component.scss"],
})
export class MerchArticlesComponent implements OnInit {
  merchArticles: MerchArticles[] = [
    { id: "hoody", viewValue: "Hoody" },
    { id: "cap", viewValue: "Cap" },
  ];

  sizes: Sizes[] = [
    { id: "s", viewValue: "S" },
    { id: "m", viewValue: "M" },
    { id: "l", viewValue: "L" },
    { id: "xl", viewValue: "XL" },
  ];

  selectedSize = "";
  selectedArticle = "";
  validInput = false;

  onDateChange(data) {
    this.selectedSize = data;
  }

  changeSize(data) {
    if (data === "s") {
      this.selectedSize = "S";
    }
    if (data === "m") {
      this.selectedSize = "M";
    }
    if (data === "l") {
      this.selectedSize = "L";
    }
    if (data === "xl") {
      this.selectedSize = "XL";
    }
    if (this.selectedSize != null) {
      this.validInput = true;
    }
  }

  createOrder(selectedSize, selectedArticle) {}

  constructor() {}

  ngOnInit() {}
}
