import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { LocalstorageProvider } from "../../providers/localstorage/localstorage";
import { LoadingComponent } from "../../components/loading/loading";
import { Platform } from "ionic-angular/platform/platform";
import { LogoutComponent } from "../../components/logout/logout";
import { PushNotificationProvider } from "../../providers/push-notification/push-notification";

@IonicPage()
@Component({
  selector: "page-tabs",
  templateUrl: "tabs.html"
})
export class TabsPage {
  rootPage: Array<Object> = [
    { page: "ActiveAlarmPage", title: "Alarm" },
    { page: "HistoryAlarmPage", title: "History" }
  ];

  constructor(
    public storage: LocalstorageProvider,
    public logout: LogoutComponent,
    public navCtrl: NavController,
    public loading: LoadingComponent,
    public notification: PushNotificationProvider,
    public platform: Platform
  ) {
    platform.ready().then(() => {
      this.storage.get("site").then(result => {
        for (let i of result) {
          this.notification
            .subscribeTopic(i["label"])
            .then(result => {})
            .catch(err => console.log(err));
        }
      });
    });
  }

  appLogout(): void {
    let loading = this.loading.loading("Please wait");
    loading.present();
    this.logout
      .run()
      .then(result => {
        loading.dismiss();
        loading.onDidDismiss(() => {
          this.navCtrl.setRoot("LoginPage");
        });
      })
      .catch(err => {
        loading.dismiss();
        console.log(err);
      });
  }
}
