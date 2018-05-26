import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { HistoryAlarmPage } from "./history-alarm";
import { ComponentsModule } from "../../components/components.module";
import { AccordionModule } from "../accordion/accordion.module";

@NgModule({
  declarations: [HistoryAlarmPage],
  imports: [
    IonicPageModule.forChild(HistoryAlarmPage),
    ComponentsModule,
    AccordionModule
  ],
  providers: []
})
export class HistoryAlarmPageModule {}
