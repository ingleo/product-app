import { Component } from '@angular/core';
import { ViewController, AlertController } from 'ionic-angular';

import { User } from '../../model/user';
import { UserService } from "../../providers/user-service";

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class ModalRegisterPage {

  userNew = new User();

  constructor(public viewCtrl: ViewController
  	, private userService: UserService
  	, private alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('Hello RegisterPage Page');
  }

  add(): void {
	this.userService.create(this.userNew)
	    .subscribe(user => {
	        this.userNew.cookie = user.cookie;
	        console.log(this.userNew.cookie);
	    });
  }


  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: '¡Hola !',
      message: '¡Confirma y Bienvenido!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Click en cancelar');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
          	this.add();
            console.log('Click en aceptar');
          }
        }
      ]
    });
    alert.present();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
