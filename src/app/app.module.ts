import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ProductService } from "../providers/product.service";
import { UserService } from "../providers/user-service";

import { Home } from '../pages/home/home';
import { OptionsPage } from '../pages/options/options';


import { ModalRegisterPage } from "../pages/register/register";
import { ModalLoginPage } from "../pages/login/login";

import { ProfileDetail } from '../pages/profile_detail/profile_detail';

@NgModule({
  declarations: [
    MyApp,
    Home,
    OptionsPage,
    ModalRegisterPage,
    ModalLoginPage,
    ProfileDetail
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
    ModalLoginPage,
    ProfileDetail
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, ProductService, UserService]
})
export class AppModule { }
