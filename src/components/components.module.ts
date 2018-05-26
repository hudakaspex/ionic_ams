import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert';
import { LoadingComponent } from './loading/loading';
import { IonicModule } from 'ionic-angular';
import { LogoutComponent } from './logout/logout';

@NgModule({
	declarations: [
		AlertComponent,
		LoadingComponent,
		LogoutComponent
	],
	imports: [],
	exports: [
		AlertComponent,
		LoadingComponent,
		IonicModule,
		LogoutComponent
	],
	providers: [
		LoadingComponent,
	]
})
export class ComponentsModule { }
