import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.page.html",
  styleUrls: ["./detail.page.scss"],
})
export class DetailPage implements OnInit {
  constructor(public http: HttpClient, public route: ActivatedRoute) {}
  res: Res;
  ngOnInit() {
    let lid = this.route.snapshot.params.lid;
    let url = "http://101.96.128.94:9999/data/product/details.php?lid=" + lid;
    this.http.get(url).subscribe((res: any) => {
      console.log(res);
      res.details.details = res.details.details.replace(
        /src="img/g,
        'src="http://101.96.128.94:9999/img'
      );

      // src="//img20.360buyimg
      // src="https://img20.360buyimg
      res.details.details = res.details.details.replace(
        /src="\/\//g, // \是转义符
        'src="https://'
      );
      this.res = res;
    });
  }
}
interface Res {
  details: Details;
  family: any;
}
interface Details {
  category: string;
  cpu: string;
  details: string;
  disk: string;
  is_onsale: string;
  lid: string;
  lname: string;
  memory: string;
  os: string;
  picList: Pic[];
  price: string;
  promise: string;
  resolution: string;
  shelf_time: string;
  sold_count: string;
  spec: string;
  subtitle: string;
  title: string;
  video_card: string;
  video_memory: string;
}
interface Pic {
  laptop_id: string;
  lg: string;
  md: string;
  pid: string;
  sm: string;
}
//
