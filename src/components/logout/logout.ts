import { Component } from "@angular/core";
import { LocalstorageProvider } from "../../providers/localstorage/localstorage";
import { PushNotificationProvider } from "../../providers/push-notification/push-notification";

@Component({
  selector: "logout",
  templateUrl: "logout.html"
})
export class LogoutComponent {
  constructor(
    private storage: LocalstorageProvider,
    private notification: PushNotificationProvider
  ) {}

  run(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.storage.get("securitySite")
        .then(result => {
          for (let i of result) {
            this.storage.delete("user", { userId: i["id"] })
              .then(result => {
                this.storage.delete("securitySite", { id: i["id"] })
                  .then(result => {
                    this.deleteSecuritySites().then(result => {
                      this.deleteSite().then(result=>{
                        resolve(true)
                      })
                      .catch(err=> reject(err));
                    })
                    .catch(err=> reject(err))
                  })
                  .catch(err => { reject(err) });
              })
              .catch(err => { reject(err) });
          }
        })
        .catch(err => reject(err));
    });
  }

  deleteSecuritySites(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.storage
        .get("securitySites")
        .then(result => {
          for (let i of result) {
            this.storage
              .delete("securitySites", { id: i["id"] })
              .then(result => {
                resolve(true);
              })
              .catch(err => reject(err));
          }
        })
        .catch(err => reject(err));
    });
  }

  deleteSite(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.storage.get("site")
        .then(result => {
          for (let i of result) {
            this.notification.unsubscribeTopic(i["label"])
              .then(unsubscribe => {
                this.storage.delete("site", { id: i["id"] })
                  .then(result => {
                    resolve(true);
                  })
                  .catch(err => reject(err));
              })
              .catch(err => reject(err));
          }
        })
        .catch(err => reject(err));
    });
  }
}
