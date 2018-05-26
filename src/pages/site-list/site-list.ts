import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Platform } from "ionic-angular/platform/platform";
import { LocalstorageProvider } from "../../providers/localstorage/localstorage";
import { emsDeploy } from "../../components/public_ip";
import { PushNotificationProvider } from "../../providers/push-notification/push-notification";
import { LoadingComponent } from "../../components/loading/loading";
import { alarmActive } from "../../components/interface";

@IonicPage()
@Component({
  selector: "page-site-list",
  templateUrl: "site-list.html"
})
export class SiteListPage {
  userList: Array<Object> = [];
  siteList: Array<Object> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    public platform: Platform,
    public storage: LocalstorageProvider,
    public notification: PushNotificationProvider,
    public loading: LoadingComponent
  ) {}

  ionViewDidLoad() {
    this.getListSite();
  }

  getListSite(): void {
    let loading = this.loading.loading("Please wait");
    loading.present();
    this.platform.ready().then(() => {
      this.storage.get("user").then(result => {
        if (result.length != 0) {
          let config: Object = {
            where: { id: result[0].userId },
            include: {
              relation: "securitySites",
              scope: { include: ["site"] }
            }
          };
          let filter = encodeURIComponent(JSON.stringify(config));
          this.http
            .get(`${emsDeploy}/api/securities/findOne?filter=${filter}`)
            .subscribe(
              user => {
                loading.dismiss();
                this.userList.push(user);
                user["securitySites"].forEach(data => {
                  this.notification
                    .subscribeTopic(data["site"].label)
                    .then(result => console.log(result));
                  this.siteList.push(data);
                });
                this.getAlarm();
              },
              (error: HttpErrorResponse) => {
                loading.dismiss();
                this.navCtrl.setRoot("LoginPage");
              }
            );
        } else {
          loading.dismiss();
          this.navCtrl.setRoot("LoginPage");
        }
      });
    });
  }

  getAlarm(): void {
    this.userList.forEach(user => {
      for (let loc of user["securitySites"]) {
        let lat: string = loc["site"].location["lat"];
        let lng: string = loc["site"].location["lng"];
        this.http
          .get<alarmActive[]>(`${emsDeploy}/api/alarms/${lat}/${lng}`)
          .subscribe(
            result => {
              let alarmsecurity = result.filter(function(type) {
                return type.type == "Security";
              });
              loc["alarmLength"] = alarmsecurity.length;
            },
            (err: HttpErrorResponse) => {
              loc["alarmLength"] = 0;
              console.log(err);
            }
          );
      }
    });
  }

  mainPageRoot(siteData: Object): void {
    for (let user of this.userList) {
      if (user["id"] == siteData["security_id"]) {
        let site = user;
        site["securitySites"] = siteData;
        this.navCtrl.push("TabsPage", { site: site });
      }
    }
  }

  appLogout() {
    let loading = this.loading.loadingDuration("Please Wait", 1000);
    this.storage.get("user").then(result => {
      for (let i in result) {
        this.storage.delete("user", { userId: result[i].userId }).then();
        loading.onDidDismiss(() => {
          this.navCtrl.setRoot("LoginPage");
        });
      }
    });
    this.siteList.forEach(siteList => {
      this.notification
        .unsubscribeTopic(siteList["site"].label)
        .then(result => {
          console.log(result);
        });
    });
  }
}
