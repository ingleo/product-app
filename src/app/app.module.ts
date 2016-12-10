import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ProductService } from "../providers/product.service";
import { UserService } from "../providers/user-service";
import { UserDbService } from "../providers/userdb.service";

import { Home } from '../pages/home/home';
import { OptionsPage } from '../pages/options/options';
import { ProductDetailPage } from '../pages/product-detail/product-detail';


import { ModalRegisterPage } from "../pages/register/register";
import { ModalLoginPage } from "../pages/login/login";

import { ProfileDetail } from '../pages/profile_detail/profile_detail';

import { CreateProductPage } from '../pages/create-product/create-product';
import { Storage } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    Home,
    OptionsPage,
    ProductDetailPage,
    ModalRegisterPage,
    ModalLoginPage,
    ProfileDetail,
    CreateProductPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    OptionsPage,
    ProductDetailPage,
    ModalRegisterPage,
    ModalLoginPage,
    ProfileDetail,
    CreateProductPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, 
  ProductService, 
  UserService,
  UserDbService,
  Storage]
})
export class AppModule { }
