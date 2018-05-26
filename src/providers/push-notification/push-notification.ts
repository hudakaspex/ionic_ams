import { Injectable } from "@angular/core";
import { Platform, Events } from "ionic-angular";
import { FCM } from "@ionic-native/fcm";

@Injectable()
export class PushNotificationProvider {
  constructor(
    private platform: Platform,
    private event: Events,
    private fcm: FCM,
  ) {}

  public regristrationDevice(): void {
    this.platform.ready().then(ready => {
      this.fcm.getToken()
        .then(token => {})
        .catch(err => console.log(err));
      this.fcm.onNotification().subscribe(
        notification => {

          console.log('notification');
          this.event.publish("notification");
        },
        err => console.log(err)
      );
      this.fcm.onTokenRefresh().subscribe(tokenRefresh => {
        // console.log(tokenRefresh);
      });
    });
  }

  public subscribeTopic(topic: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.platform.ready().then(ready => {
        this.fcm.subscribeToTopic(topic).then(
          subscribe => {
            resolve(subscribe);
          },
          err => {
            reject(err);
            console.log(err);
          }
        );
      });
    });
  }

  public unsubscribeTopic(topic: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.platform.ready().then(ready => {
        this.fcm.unsubscribeFromTopic(topic).then(
          subscribe => {
            resolve(subscribe);
          },
          err => {
            reject(err);
            console.log(err);
          }
        );
      });
    });
  }
}
