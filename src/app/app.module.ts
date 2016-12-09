import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ProductService } from "../providers/product.service";

import { Home } from '../pages/home/home';
import { OptionsPage } from '../pages/options/options';


import { ModalRegisterPage } from "../pages/register/register";
import { ModalLoginPage } from "../pages/login/login";



@NgModule({
  declarations: [
    MyApp,
    Home,
    OptionsPage,
    ModalRegisterPage,
    ModalLoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    OptionsPage,
    ModalRegisterPage,
    ModalLoginPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},ProductService]
})
export class AppModule {}
