import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccordionPage } from "./accordion";
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    AccordionPage
  ],
  imports: [
    IonicPageModule.forChild(AccordionPage),
    ComponentsModule
  ],
  exports : [AccordionPage]
})
export class AccordionModule {}
