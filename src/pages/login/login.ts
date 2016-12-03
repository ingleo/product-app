import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class ModalLoginPage {

  constructor(public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
