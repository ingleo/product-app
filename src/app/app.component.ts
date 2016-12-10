import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';


import { Home } from '../pages/home/home';
import { ProfileDetail } from '../pages/profile_detail/profile_detail';
import { OptionsPage } from '../pages/options/options';
import { CreateProductPage } from '../pages/create-product/create-product';


@Component({
  templateUrl: 'app.html'
})


export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Home;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: Home },
      { title: 'Profile', component: ProfileDetail},
      { title: 'Create Product', component: CreateProductPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  closeSession(){
    //TODO implementación para cerrar sesión
    alert('se cierrra la sesión');
  }
}
