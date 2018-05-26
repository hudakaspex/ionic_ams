import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DirectivesModule } from '../directives/directives.module';
import { registerLocaleData } from '@angular/common';
import locale_id from '@angular/common/locales/id';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SQLite } from '@ionic-native/sqlite';
import { FCM } from '@ionic-native/fcm';

import { PushNotificationProvider } from '../providers/push-notification/push-notification';
import { LocalstorageProvider } from '../providers/localstorage/localstorage';
import { FilterStringImgPipe } from '../pipes/filter-stringImg/filter-stringImg';
import { FilterStringAftrCharPipe } from '../pipes/filter-string-aftr-char/filter-string-aftr-char'
import { StrSpitJoinPipe } from '../pipes/str-spit-join/str-spit-join';
import { SortArrayPipe } from '../pipes/sort-array/sort-array';

registerLocaleData(locale_id)
@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: true,
      scrollAssist: true,
      autoFocusAssist: true
    }),
    HttpClientModule,
    DirectivesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocalstorageProvider,
    SQLite,
    FilterStringImgPipe,
    FilterStringAftrCharPipe,
    StrSpitJoinPipe,
    SortArrayPipe,
    PushNotificationProvider,
    FCM,
    { provide : locale_id, useValue : "id" }
  ]
})
export class AppModule {}
