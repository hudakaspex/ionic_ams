import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from "ionic-angular";
import { emsDeploy } from "../../components/public_ip";

@IonicPage()
@Component({
  selector: "page-alarm-image",
  templateUrl: "alarm-image.html"
})
export class AlarmImagePage {
  containImage: string;

  constructor(
    public navCtrl: NavController,
    public param: NavParams,
    public viewCtrl: ViewController
  ) {
    let stringImage = param.get("stringJpg");
    this.containImage = emsDeploy + "/api/containers/security/download/" + stringImage;
  }

  backPage() {
    this.viewCtrl.dismiss();
  }

}
