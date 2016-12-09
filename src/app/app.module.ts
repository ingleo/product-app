import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Pagelogin } from '../pages/pagelogin/pagelogin';
import { Home } from '../pages/home/home';
import {ProductService} from "../providers/product.service";

@NgModule({
  declarations: [
    MyApp,
    Pagelogin,
    Home
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Pagelogin,
    Home
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},ProductService]
})
export class AppModule {}
