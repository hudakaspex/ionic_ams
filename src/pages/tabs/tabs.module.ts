import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';
import { SuperTabsModule, SuperTabsController } from 'ionic2-super-tabs'
import { LoadingComponent } from '../../components/loading/loading';
import { ComponentsModule } from '../../components/components.module';
import { LogoutComponent } from '../../components/logout/logout';

@NgModule({
  declarations: [
    TabsPage,
  ],
  imports: [
    IonicPageModule.forChild(TabsPage),
    SuperTabsModule,
    ComponentsModule
  ],
  providers : [
    SuperTabsController,
    LoadingComponent,
    LogoutComponent
  ]
})
export class TabsPageModule {}
