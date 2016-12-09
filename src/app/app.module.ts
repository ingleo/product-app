import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Home } from '../pages/home/home';
import { OptionsPage } from '../pages/options/options';
import { ProductService } from "../providers/product.service";

@NgModule({
  declarations: [
    MyApp,
    OptionsPage,
    Home
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    OptionsPage,
    Home
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},ProductService]
})
export class AppModule {}
