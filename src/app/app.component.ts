import { Component, ViewChild } from '@angular/core';
import { Nav, Platform} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Storage } from '@ionic/storage';

import { Home } from '../pages/home/home';
import { ProfileDetail } from '../pages/profile_detail/profile_detail';
import { OptionsPage } from '../pages/options/options';
import { EditProfilePage } from '../pages/edit_profile/edit_profile';
import { CreateProductPage } from '../pages/create-product/create-product';


@Component({
  templateUrl: 'app.html'
})


export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Home;

  pages: Array<{title: string, component: any}>;

  pageHome = [{ title: 'Home', component: Home }];

  constructor(public platform: Platform,
              public storage: Storage) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: Home },
      { title: 'Profile', component: ProfileDetail}
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
    this.storage.set("cookie", null);
    this.storage.set("email", null);
    this.storage.set("userSigned", null);
    //this.openPage(this.pageHome);
    //TODO implementación para cerrar sesión
   // alert('se cierrra la sesión');
  }
}
