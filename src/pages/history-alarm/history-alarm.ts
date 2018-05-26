import { Component } from "@angular/core";
import { DatePipe } from "@angular/common";
import {
  IonicPage,
  NavController,
  ModalController,
  Events,
  Loading
} from "ionic-angular";
import { HttpClient } from "@angular/common/http";
import { alarmHistory, site } from "../../components/interface";
import { emsDeploy } from "../../components/public_ip";
import { LoadingComponent } from "../../components/loading/loading";
import { FilterStringAftrCharPipe } from "../../pipes/filter-string-aftr-char/filter-string-aftr-char";
import { FilterStringImgPipe } from "../../pipes/filter-stringImg/filter-stringImg";
import { LocalstorageProvider } from "../../providers/localstorage/localstorage";
import { SortArrayPipe } from "../../pipes/sort-array/sort-array";

@IonicPage()
@Component({
  selector: "page-history-alarm",
  templateUrl: "history-alarm.html"
})
export class HistoryAlarmPage {
  dataAlarm: Array<Object> = [];
  site: Array<site> = [];
  startTimeAlarm: number = 1;
  optionSelect: Array<Object> = [
    { label: "24 Hours", value: 24, selected: false },
    { label: "12 Hours", value: 12, selected: false },
    { label: "1 Hours", value: 1, selected: false }
  ];
  datePipe: DatePipe = new DatePipe("id");

  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    public loadingCtrl: LoadingComponent,
    public filterStrChar: FilterStringAftrCharPipe,
    public pipeStringImg: FilterStringImgPipe,
    public modal: ModalController,
    public event: Events,
    public storage: LocalstorageProvider,
    public sortPipe: SortArrayPipe
  ) {
    event.subscribe("notification", () => {
      this.getHistoryAlarm(false);
    });
  }

  ionViewDidLoad(): void {
    this.storage.get("site").then(site => {
      this.site = site;
      if (this.site.length != 0) {
        this.getHistoryAlarm(false);
      }
    });
  }

  selectedFilter(event): void {
    this.startTimeAlarm = event;
    this.getHistoryAlarm(true);
    this.setSelectOption();
  }

  setSelectOption(): void {
    for (let i in this.optionSelect) {
      if (this.optionSelect[i]["value"] == this.startTimeAlarm) {
        this.optionSelect[i]["selected"] = true;
      }
    }
  }

  getHistoryAlarm(loading: boolean): void {
    let loader: Loading = this.loadingCtrl.loading("Please wait");
    if (loading) {
      loader.present().then();
    }
    let date = new Date();
    date.setHours(date.getHours() - this.startTimeAlarm);
    let startDateTime = date.toISOString();
    let endDateTime = new Date().toISOString();
    let latitude: number = this.site[0]["latitude"];
    let longitude: number = this.site[0]["longitude"];
    this.http
      .get<alarmHistory[]>(
        `${emsDeploy}/api/alarms/log/${startDateTime}/${endDateTime}/${latitude}/${longitude}`
      )
      .subscribe(
        result => {
          this.dataAlarm = [];
          result = this.sortPipe.transform(result, "DESC");

          for (let i in result) {
            if (result[i].type == "Security") {
              let description = this.filterStrChar.transform(
                result[i]["description"],
                ","
              );
              let actTime = this.datePipe.transform(
                result[i]["actTime"],
                "yyyy-MM-dd HH:mm:ss a",
                "+0700"
              );
              let clearTime = this.datePipe.transform(
                result[i]["clearTime"],
                "yyyy-MM-dd HH:mm:ss a",
                "+0700"
              );
              let ackTime = this.datePipe.transform(
                result[i]["ackTime"],
                "yyyy-MM-dd hh:mm:ss a",
                "+0700"
              );

              let accordionData = {
                title: { title: result[i].severity, subtitle: actTime },
                content: [
                  {
                    Id: result[i].id,
                    "Acknowledge user": result[i].ackUser,
                    "Acknowledge time": ackTime,
                    Description: description,
                    "Clear time": clearTime
                  }
                ],
                buttons: [
                  {
                    label: "see image",
                    value: result[i].description,
                    type: "image"
                  }
                ]
              };
              this.dataAlarm.push(accordionData);
            }
          }
          if (loading) {
            loader.dismiss();
          }
        },
        err => {
          if (loading) {
            loader.dismiss();
          }
        }
      );
  }

  showModalImage(stringImage: string): void {
    let containImage: string = this.pipeStringImg.transform(
      stringImage["value"]
    );
    let modal = this.modal.create("AlarmImagePage", {
      stringJpg: containImage
    });
    modal.present();
  }
}
