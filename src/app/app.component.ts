import { Component } from "@angular/core";
import { Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { LocalstorageProvider } from "../providers/localstorage/localstorage";
import { PushNotificationProvider } from "../providers/push-notification/push-notification";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  rootPage: string;

  constructor(
    public platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public storage: LocalstorageProvider,
    public notification: PushNotificationProvider
  ) {
    platform.ready().then(() => {
      this.storage.createDatabase();
      this.notification.regristrationDevice();
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.backgroundColorByHexString("#4881ff");
      statusBar.styleLightContent();
      splashScreen.hide();
      this.storage.get("user").then(user => {
        this.storage
          .get("site")
          .then(site => {
            if (user.length == 0 || site.length == 0) {
              this.rootPage = "LoginPage";
            } else {
              this.rootPage = "TabsPage";
            }
          })
          .catch(err => {
            this.rootPage = "LoginPage";
          });
      })
      .catch(err => {
        this.rootPage = "LoginPage";
      });
    });
  }
}
