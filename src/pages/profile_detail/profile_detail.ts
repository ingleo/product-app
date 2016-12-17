import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../model/user'
import { UserService } from '../../providers/user-service'
import { AlertController } from 'ionic-angular';
import { EditProfilePage } from '../edit_profile/edit_profile';
import { Home } from '../home/home';
import { OptionsPage } from '../options/options';
import { Storage } from '@ionic/storage';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';

@Component({
  selector: 'page-page2',
  templateUrl: 'profile_detail.html'
})

export class ProfileDetail {

  //users: User[];
  private userSigned: any = { email: '', cookie: '' };
  user = new User();

  constructor(
    public navCtrl: NavController,
    private userService: UserService,
    public alertCtrl: AlertController,
    public storage: Storage) { }

ionViewWillEnter() {
    this.storage.get("userSigned").then(res => {
      console.log(res);
      if (res != null) {
        this.userSigned.email = res['email'] == null ? '' : res['email'];
        this.userSigned.cookie = res['cookie'] == null ? '' : res['cookie'];
        this.user.email = this.userSigned.email;
        this.userService.getUser(this.user)
          .subscribe(
          user => {
            this.user = user;
          },
          error => {
            console.log(error);
          });
      } else {
        console.log('redireccionando a options')
        this.navCtrl.push(OptionsPage);
      }
    })
  }

  /************Cerrar Sesion:***************/
  showConfirm() {
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
            this.navCtrl.setRoot(Home);
          }
        }
      ]
    });
    confirm.present();
  }

  /************Eliminar Usuario:***************/
  showConfirm2() {
    let confirm = this.alertCtrl.create({
      title: 'Eliminar',
      message: '¿Desea Borrar su usuario?',
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
            this.userService.remove(this.user).subscribe(res => {
              console.log('se ha borrado el usuario');
              this.storage.remove("userSigned");
              this.navCtrl.pop();
              this.navCtrl.setRoot(Home);
            });
          }
        }
      ]
    });
    confirm.present();
  }

  editProfile() {
    this.navCtrl.push(EditProfilePage, {p: this.user.email});
  }

  changePassword() {
    this.navCtrl.pop();
    this.navCtrl.push(ForgotPasswordPage);
  }

}
