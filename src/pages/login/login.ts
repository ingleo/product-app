import { Component } from '@angular/core';
import { ViewController, NavController, AlertController } from 'ionic-angular';

//import { User } from '../../model/user';
import { UserService } from "../../providers/user-service";

import { Storage } from '@ionic/storage';

import { OptionsPage } from '../options/options';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { Home } from '../home/home';

import { CustomValidators } from '../../validators/custom-validator';

import { FormBuilder, FormGroup, FormControl, Validators, Validator } from '@angular/forms';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class ModalLoginPage {

  private userSigned: any = { email: '', cookie: '' };
  userForm: FormGroup;
  email: string;
  password: string;
  network: string;

  constructor(public viewCtrl: ViewController
    , private userService: UserService
    , private formBuilder: FormBuilder
    , public storage: Storage
    , public navCtrl: NavController
    , private alertCtrl: AlertController) {
    this.userForm = this.loginUserForm();
  }

  ngOnInit() {
    console.log('Hello LoginPage Page');
  }

  dismiss() {
    this.viewCtrl.dismiss();
    this.navCtrl.push(OptionsPage);
  }

  login(): void {
    this.userService.sigin(this.userForm.value.email, this.userForm.value.password)
      .subscribe(user => {

        console.log(user.cookie);

        //this.userdbService.create(this.userNew);
        if (typeof user['email'] === "undefined" || typeof user['cookie'] === "undefined") {
          this.presentConfirm();
        }
        else {
          this.userSigned.email = user['email'];
          this.userSigned.cookie = user['cookie'];

          this.storage.set("userSigned", this.userSigned);
          //this.dismiss();
          this.navCtrl.pop();
          this.navCtrl.push(Home);
        }
      });
  }

  changePassWord() {
    this.viewCtrl.dismiss();
    this.navCtrl.push(ForgotPasswordPage);
  }

  private loginUserForm() {
    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.minLength(6), CustomValidators.emailValidator]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: '¡Error !',
      message: 'Datos incorrectos',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            //this.dismiss();
            this.userForm.reset({ email: '', password: '' });
            console.log('Click en aceptar');
          }
        }
      ]
    });
    alert.present();
  }

}
