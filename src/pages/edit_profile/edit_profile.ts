import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../model/user'
import { UserService } from '../../providers/user-service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { CustomValidators } from '../../validators/custom-validator';

import { Storage } from '@ionic/storage';
import { ProfileDetail } from '../profile_detail/profile_detail';

@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit_profile.html'
})

export class EditProfilePage {

  userForm: FormGroup;
  user = new User();
  userSigned : any = { email: '', cookie: ''};

  constructor(public navCtrl: NavController, private userService: UserService, public alertCtrl: AlertController,
    public formBuilder: FormBuilder, public navParams: NavParams, public storage: Storage) {

    this.user.email = this.navParams.get('p');
    this.getUserProfile(this.user.email);
    this.userForm = this.createUserForm();
  }

  getUserProfile(email: string) {
    this.userService.getUser(this.user)
      .subscribe(
      user => {
        this.user = user;
      },
      error => {
        console.log(error);
      });
  }

  /**********Formulario***************/
  saveUser() {
    console.log(this.userForm.value);
    this.userService.update(this.user)
      .subscribe(
        user => {
          this.user = user;
          this.userSigned.email = this.user.email;
          this.userSigned.cookie = this.user.cookie;
          this.storage.set("userSigned", this.userSigned);
        },
        error => {
          console.log(error);
        }
      );
  }

  private createUserForm() {
    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Actualizar',
      message: '¿Desea Actualizar su usuario?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('No deseo borrarme');
          }
        },
        {
          text: 'Si',
          handler: () => {
            this.saveUser();
            this.navCtrl.pop();
            this.navCtrl.setRoot(ProfileDetail);
          }
        }
      ]
    });
    confirm.present();
  }

}
