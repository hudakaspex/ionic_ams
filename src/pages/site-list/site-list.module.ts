import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SiteListPage } from './site-list';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    SiteListPage,
  ],
  imports: [
    IonicPageModule.forChild(SiteListPage),
    ComponentsModule
  ],
})
export class SiteListPageModule {}
