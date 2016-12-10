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
import { EditProfilePage } from '../pages/edit_profile/edit_profile';

@NgModule({
  declarations: [
    MyApp,
    Home,
    OptionsPage,
    ModalRegisterPage,
    ModalLoginPage,
    ProfileDetail,
    EditProfilePage
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
    ProfileDetail,
    EditProfilePage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, ProductService, UserService]
})
export class AppModule { }
