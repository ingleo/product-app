import { Component } from '@angular/core';
import { NavController/*, ModalController*/ } from 'ionic-angular';

import { ModalRegisterPage } from "../register/register";
import { ModalLoginPage } from "../login/login";

@Component({
  selector: 'page-options',
  templateUrl: 'options.html'
})
export class OptionsPage {

  constructor(public navCtrl: NavController/*, public modalCtrl: ModalController*/) {}

  ionViewDidLoad() {
    console.log('Hello OptionsPage Page');
  }

  presentRegister() {
    //let profileRegisterModal = this.modalCtrl.create(ModalRegisterPage, { userId: 8675309 });
    //profileRegisterModal.present();
    this.navCtrl.pop();
    this.navCtrl.push(ModalRegisterPage);
  }

  presentLogin() {
    //let profileLoginModal = this.modalCtrl.create(ModalLoginPage, { userId: 8675309 });
    //profileLoginModal.present();
    this.navCtrl.pop();
    this.navCtrl.push(ModalLoginPage);
  }

}
