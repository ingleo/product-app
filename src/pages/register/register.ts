import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class ModalRegisterPage {

  constructor(public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('Hello RegisterPage Page');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
