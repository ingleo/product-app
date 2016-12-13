import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Home } from '../pages/home/home';
import { ProfileDetail } from '../pages/profile_detail/profile_detail';
import { OptionsPage } from '../pages/options/options';
import { EditProfilePage } from '../pages/edit_profile/edit_profile';
import { CreateProductPage } from '../pages/create-product/create-product';
import { Storage } from '@ionic/storage';


@Component({
  templateUrl: 'app.html'
})


export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Home;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public storage: Storage, public alertCtrl: AlertController) {
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
    let confirm = this.alertCtrl.create({
      title: 'Cerrar sesión',
      message: '¿Desea cerrar sesión?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Si',
          handler: () => {
            console.log('Agree clicked');
            this.storage.remove("userSigned");
            this.nav.setRoot(this.rootPage);
          }
        }
      ]
    });
    confirm.present();
  }
}
