import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page {
  constructor(public http: HttpClient) {}
  url = "http://101.96.128.94:9999/data/product/list.php?pno=";
  res: Res;
  ngOnInit(): void {
    let url = this.url + 1;
    this.http.get(url).subscribe((res: any) => {
      //console.log(res);
      this.res = res;
    });
  }
  doRefresh(event) {
    this.http.get(this.url + 1).subscribe((res: any) => {
      this.res = res;
      event.target.complete();
    });
  }
  loadData(event) {
    let nextUrl = this.url + (this.res.pno + 1);
    this.http.get(nextUrl).subscribe((res: any) => {
      //console.log(res);
      res.data = this.res.data.concat(res.data);
      this.res = res;
      event.target.complete();
    });
  }
}
interface Res {
  data: Data[];
  pageCount: number;
  pageSize: number;
  pno: number;
  recordCount: number;
}
interface Data {
  is_onsale: string;
  lid: string;
  pic: string;
  price: string;
  sold_count: string;
  title: string;
}
