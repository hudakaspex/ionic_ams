import { Component, ViewChild } from "@angular/core";
import { DatePipe } from "@angular/common";
import {
  IonicPage,
  Events,
  ToastController
} from "ionic-angular";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { alarmActive, user, site } from "../../components/interface";
import { emsDeploy } from "../../components/public_ip";
import { FilterStringImgPipe } from "../../pipes/filter-stringImg/filter-stringImg";
import { LoadingComponent } from "../../components/loading/loading";
import { AlertComponent } from "../../components/alert/alert";
import { SortArrayPipe } from "../../pipes/sort-array/sort-array";
import { FilterStringAftrCharPipe } from "../../pipes/filter-string-aftr-char/filter-string-aftr-char";
import { LocalstorageProvider } from "../../providers/localstorage/localstorage";
import { NavController } from "ionic-angular/navigation/nav-controller";

@IonicPage()
@Component({
  selector: "page-active-alarm",
  templateUrl: "active-alarm.html"
})
export class ActiveAlarmPage {
  apiImage: string = emsDeploy + "/api/containers/security/download/";
  user: Array<user> = [];
  site: Array<site> = [];
  dataAlarm: Array<alarmActive> = [];
  @ViewChild("alert") alert: AlertComponent;
  datePipe:DatePipe = new DatePipe('id')

  constructor(
    public http: HttpClient,
    public pipeStringImg: FilterStringImgPipe,
    public loadingCtrl: LoadingComponent,
    public sortPipe: SortArrayPipe,
    public event: Events,
    public toastCtrl: ToastController,
    public pipeStringChar: FilterStringAftrCharPipe,
    public storage: LocalstorageProvider,
    private nav:NavController
  ) {
    event.subscribe("notification", () => {
      this.nav.setRoot('LoginPage')
      this.getActiveAlarm();
      this.toast();
    });
  }

  toast(): void {
    let toast = this.toastCtrl.create({
      message: "New notification alarm",
      duration: 1000,
      position: "top"
    });
    toast.present();
  }

  ionViewDidLoad() {
    this.storage.get("securitySite").then(user => {
      this.user = user
      this.storage.get("site").then(site => {
        this.site = site
        if (this.site.length!=0) {
          this.getActiveAlarm();
        }
      });
    });
  }

  getActiveAlarm(): void {
    let loading = this.loadingCtrl.loading("Please wait");
    loading.present();
    let latitude: number = this.site[0]['latitude']
    let longitude: number = this.site[0]['longitude']
    this.http
      .get<alarmActive[]>(`${emsDeploy}/api/alarms/${latitude}/${longitude}`)
      .subscribe(
        result => {
          this.dataAlarm = [];

          // filter alarm type security
          let alarmsecurity = result.filter(function(type) {
            return type.type == "Security";
          });

          // sort DESC array alarm based on actTime
          alarmsecurity = this.sortPipe.transform(alarmsecurity, "DESC");
          this.dataAlarm = alarmsecurity;
          this.setDataAlarm();

          loading.dismiss();
        },
        (err: HttpErrorResponse) => {
          loading.dismiss();
          console.log(err);
        }
      );
  }

  setDataAlarm(): void {
    this.dataAlarm.forEach(alarm => {
      alarm["image"] = this.pipeStringImg.transform(alarm["description"]);
      alarm["description"] = this.pipeStringChar.transform(alarm["description"], ",");
      alarm['actTime'] = this.datePipe.transform(alarm['actTime'], "dd-MM-yyyy hh:mm:ss a", "+0700")
    });
  }

  acknowledgeAlarm(idAlarm: number): void {
    let loading = this.loadingCtrl.loading("Please wait");
    loading.present();
    this.http
      .post(
        `${emsDeploy}/api/alarms/acknowledge/${idAlarm}/${this.user[0]["name"]}`,
        {}
      )
      .subscribe(
        result => {
          loading.dismiss();
          this.getActiveAlarm();
          loading.onDidDismiss(() => {
            setTimeout(() => {
              this.alert.messageAlert({
                title: "Success",
                message: "Success to acknowledge alarm"
              });
            }, 1000);
          });
        },
        (error: HttpErrorResponse) => {
          loading.dismiss();
          this.alert.messageAlert({
            title: "Failed",
            message: "Failed to acknowledge alarm"
          });
        }
      );
  }
}
