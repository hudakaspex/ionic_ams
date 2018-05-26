import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActiveAlarmPage } from './active-alarm';
import { ComponentsModule } from '../../components/components.module';
import { AccordionModule } from '../accordion/accordion.module'
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    ActiveAlarmPage,
  ],
  imports: [
    IonicPageModule.forChild(ActiveAlarmPage),
    ComponentsModule,
    AccordionModule,
    DirectivesModule
  ],
  providers : []
})
export class ActiveAlarmPageModule {}
