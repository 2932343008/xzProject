import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  res: Res;
  constructor(public http: HttpClient) {}
  ngOnInit(): void {
    let url = "http://101.96.128.94:9999/data/product/index.php";
    this.http.get(url).subscribe((res: any) => {
      console.log(res);
      this.res = res;
    });
  }
}
interface Res {
  carouselItems: Carousel[];
  newArrivalItems: Item[];
  recommendedItems: Item[];
  topSaleItems: Item[];
}
interface Carousel {
  cid: string;
  href: string;
  img: string;
  title: string;
}
interface Item {
  details: string;
  href: string;
  pic: string;
  pid: string;
  price: string;
  title: string;
}
