import { Component, OnInit, ViewChild } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Toast } from "@ionic-native/toast";
import { Platform } from "ionic-angular/platform/platform";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LocalstorageProvider } from "../../providers/localstorage/localstorage";
import { emsDeploy } from "../../components/public_ip";
import { AlertComponent } from "../../components/alert/alert";
import { LoadingComponent } from "../../components/loading/loading";
import { Loading } from "ionic-angular/components/loading/loading";
import { site, securitySites, user } from "../../components/interface";
import { Subscription } from "rxjs/Subscription";

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage implements OnInit {
  header: HttpHeaders = new HttpHeaders();
  form: FormGroup;
  loading: Loading;
  @ViewChild("alert") alert: AlertComponent;

  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public toast: Toast,
    public platform: Platform,
    public http: HttpClient,
    public storage: LocalstorageProvider,
    public loadingCtrl: LoadingComponent
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ["", Validators.compose([Validators.required])],
      password: ["", Validators.compose([Validators.required])]
    });

    this.form.valueChanges.subscribe(result => {
      let controlValidate: Array<string> = ["username", "password"];
      for (let control of controlValidate) {
        let required: boolean = this.form.get(control).hasError("required");
        let touched: boolean = this.form.get(control).hasError("touched");
        let dirty: boolean = this.form.get(control).dirty;
        if (required && (touched || dirty)) {
          this.platform.ready().then(ready => {
            this.toast
              .show(control + " is required", "1000", "bottom")
              .subscribe(toast => {});
          });
        }
      }
    });
  }

  onSubmit(value: object): void {
    this.loading = this.loadingCtrl.loading("Please wait");
    this.loading.present();
    this.header.set("Content-Type", "application/json");
    this.http
      .post(`${emsDeploy}/api/securities/login`, value, {
        headers: this.header
      })
      .subscribe(
        result => {
          this.platform.ready().then(ready => {
            this.storage
              .get("user")
              .then(user => {
                if (user.length == 0) {
                  this.storage
                    .insert("user", result, false)
                    .then(value => {
                      this.getSite();
                    })
                    .catch(err => {
                      console.log(err);
                    });
                } else {
                  this.getSite();
                }
              })
              .catch(err => {
                this.loading.dismiss();
              });
          });
        },
        err => {
          this.loading.dismiss();
          this.loading.onDidDismiss(() => {
            this.alert.messageAlert({
              title: "Failed Login",
              message: "wrong username or password"
            });
          });
        }
      );
  }

  getSite(): void {
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
          let subscribetion:Subscription = this.http
            .get(`${emsDeploy}/api/securities/findOne?filter=${filter}`)
            .subscribe(
              user => {
                this.setStorage(user)
                  .then(result => {
                    this.loading.dismiss();
                    this.loading.onDidDismiss(() => {
                      subscribetion.unsubscribe();
                      this.navCtrl.setRoot("TabsPage");
                    });
                  })
                  .catch(err => {
                    this.loading.dismiss();
                  });
              },
              err => {
                this.loading.dismiss();
              }
            );
        } else {
          this.loading.dismiss();
        }
      });
    });
  }

  setStorage(data: Object): Promise<any> {
    let site: Array<site> = [];
    let securitySites: Array<securitySites> = [];
    let securitySite: user = Object.assign(
      {},
      {
        id: data["id"],
        email: data["email"],
        emailVerified: data["emailVerified"],
        username: data["username"],
        name: data["name"],
        phone: data["phone"],
        realm: data["realm"]
      }
    );

    data["securitySites"].forEach(value => {
      site.push({
        id: value.site["id"],
        district_id: value.site["district_id"],
        discobj_id: value.site["discobj_id"],
        label: value.site["label"],
        address: value.site["address"],
        zoom: value.site["zoom"],
        latitude: value.site["location"].lat,
        longitude: value.site["location"].lng
      });

      securitySites.push({
        id: value["id"],
        security_id: value["security_id"],
        site_id: value["site_id"]
      });
    });

    return new Promise((resolve, reject) => {
      this.storage
        .insert("securitySite", securitySite, false)
        .then(result => {
          for (let i of securitySites) {
            this.storage
              .insert("securitySites", i, false)
              .then(result => {
                for (let j of site) {
                  this.storage
                    .insert("site", j, false)
                    .then(result => {
                      resolve(result);
                    })
                    .catch(err => reject(err));
                }
              })
              .catch(err => reject(err));
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
