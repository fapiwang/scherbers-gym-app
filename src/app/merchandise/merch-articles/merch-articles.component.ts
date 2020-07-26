import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

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
  @Output() orderSize: EventEmitter<any> = new EventEmitter();

  merchArticles: string[] = ["Hoody", "Cap"];
  prices: string[] = ["45€", "25€"];

  articleImages: string[] = [
    "../../../assets/hoody.png",
    "../../../assets/cap.png",
  ];

  sizes: Sizes[] = [
    { id: "s", viewValue: "S" },
    { id: "m", viewValue: "M" },
    { id: "l", viewValue: "L" },
    { id: "xl", viewValue: "XL" },
  ];

  selectedSize = "";
  selectedArticle = "";
  validInput: boolean[] = new Array(this.articleImages.length);
  articleIndex: number;

  onDateChange(data) {
    this.selectedSize = data;
  }

  getIndex(i) {
    this.articleIndex = i;
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
    if (this.selectedSize != "") {
      this.validInput[this.articleIndex] = true;
    }
  }

  goToOrder() {
    this.orderSize.emit(this.selectedSize);
  }

  constructor() {}

  ngOnInit() {}
}
