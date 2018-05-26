import { NgModule } from '@angular/core';
import { IonicPageModule, NavParams } from 'ionic-angular';
import { AlarmImagePage } from './alarm-image';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    AlarmImagePage,
  ],
  imports: [
    IonicPageModule.forChild(AlarmImagePage),
    DirectivesModule
  ],
})
export class AlarmImagePageModule { }
