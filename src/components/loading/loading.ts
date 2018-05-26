import { Component } from '@angular/core';
import { LoadingController, Loading } from 'ionic-angular';

@Component({
  selector: 'loading',
  templateUrl: 'loading.html'
})
export class LoadingComponent {

  constructor(private loadingCtrl: LoadingController) { }

  loadingDuration(content: string, duration: number): Loading {
    let loading: Loading = this.loadingCtrl.create({
      content: content,
      duration: duration
    })
    loading.present();
    return loading
  }

  loading(content: string): Loading {
    let loading: Loading = this.loadingCtrl.create({
      content: content
    })
    return loading
  }

}
