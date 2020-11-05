import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-tab4",
  templateUrl: "./tab4.page.html",
  styleUrls: ["./tab4.page.scss"],
})
export class Tab4Page implements OnInit {
  uname: "";
  upwd: "";
  doLogin() {
    console.log(this.uname, this.upwd);
    let url = "http://101.96.128.94:9999/data/user/login.php";
    let body = `uname=${this.uname}&upwd=${this.upwd}`;
    let options = {
      headers: new HttpHeaders({
        "content-type": "application/x-www-form-urlencoded",
      }),
    };
    this.http.post(url, body, options).subscribe((res: any) => {
      console.log(res);
      let code = res.code;
      if (code == 200) {
        this.alertC
          .create({ header: "恭喜,登录成功", buttons: ["确定"] })
          .then((res) => res.present());
      } else {
        this.alertC
          .create({ header: "很遗憾,登录失败", buttons: ["确定"] })
          .then((res) => res.present());
      }
    });
  }
  constructor(public http: HttpClient, public alertC: AlertController) {}

  ngOnInit() {}
}
