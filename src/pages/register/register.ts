import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewController, NavController, AlertController } from 'ionic-angular';
import { User } from '../../model/user';
import { UserService } from "../../providers/user-service";
import { UserDbService } from "../../providers/userdb.service";
import { OptionsPage } from '../options/options';
import { CustomValidators } from '../../validators/custom-validator';
import { Home } from '../home/home';

import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class ModalRegisterPage {

  private userSigned : any = { email: '', cookie: ''};

  userForm: FormGroup;
  userNew = new User();

  constructor(public viewCtrl: ViewController
  	, private userService: UserService
    , private userdbService: UserDbService
  	, private alertCtrl: AlertController
    , public storage: Storage
    , public navCtrl: NavController
    , public formBuilder: FormBuilder)
  {
    this.userForm = this.createUserForm();
  }


  ionViewDidLoad() {
    console.log('Hello RegisterPage Page');
  }

  add(): void {
	  this.userService.create(this.userNew)
	    .subscribe(user => {
	        this.userNew.cookie = user.cookie;
	        console.log(this.userNew.cookie);

          //this.userdbService.create(this.userNew);

          this.userSigned.email = this.userNew.email;
          this.userSigned.cookie = this.userNew.cookie;

          this.storage.set("userSigned", this.userSigned);
          this.navCtrl.push(Home);
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


  private createUserForm() {
    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.minLength(6)/*, CustomValidators.emailValidator*/]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
