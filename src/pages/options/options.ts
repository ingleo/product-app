import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { ModalRegisterPage } from "../register/register";
import { ModalLoginPage } from "../login/login";

/*
  Generated class for the Options page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-options',
  templateUrl: 'options.html'
})
export class OptionsPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {}

  ionViewDidLoad() {
    console.log('Hello OptionsPage Page');
  }

  presentRegister() {
    let profileRegisterModal = this.modalCtrl.create(ModalRegisterPage, { userId: 8675309 });
    profileRegisterModal.present();
  }

  presentLogin() {
    let profileLoginModal = this.modalCtrl.create(ModalLoginPage, { userId: 8675309 });
    profileLoginModal.present();
  }

}
