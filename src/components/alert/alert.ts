import { Component } from '@angular/core';
import { AlertController, AlertOptions } from 'ionic-angular';

@Component({
  selector: 'alert',
  template: ''
})
export class AlertComponent {


  constructor(private alertCtrl:AlertController) {}

  public messageAlert(alertOption:AlertOptions):void{
    let alert = this.alertCtrl.create({
      title : alertOption['title'],
      message : alertOption['message'],
      buttons : ['OK']
    }).present();
  }

}
