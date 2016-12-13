import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { UserService } from "../../providers/user-service";

import { ModalLoginPage } from '../login/login';

import { FormBuilder, FormGroup, FormControl, Validators, Validator } from '@angular/forms';

import { CustomValidators } from '../../validators/custom-validator';

@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html'
})
export class ForgotPasswordPage {

  userForm: FormGroup;
  email : string;
  password : string; 

  constructor(public navCtrl: NavController
  	, private alertCtrl: AlertController
  	, private userService: UserService
    , private formBuilder: FormBuilder) 
  {
  	this.userForm = this.changePassUserForm();
  }

  ionViewDidLoad() {
    console.log('Hello ForgotPasswordPage Page');
  }

  dismiss() {
    this.navCtrl.pop();
    this.navCtrl.push(ModalLoginPage);
  }

  changePassword(): void {
	this.userService.chgPassword(this.userForm.value.email, this.userForm.value.password)
      .subscribe(user => {
        
          console.log(user.cookie);
          this.navCtrl.pop();
          this.navCtrl.push(ModalLoginPage);    
      });
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Contraseña',
      message: 'Confirmar cambio de contraseña',
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
            this.changePassword();
            console.log('Click en aceptar');
          }
        }
      ]
    });
    alert.present();
  }

  changePassUserForm()
  {
  	return this.formBuilder.group({
      email: ['', [Validators.required, Validators.minLength(6),CustomValidators.emailValidator]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });  	
  }

}
