import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../model/user'
import { UserService } from '../../providers/user-service'
import { AlertController } from 'ionic-angular';
import { EditProfilePage } from '../edit_profile/edit_profile';
import { Home } from '../home/home';

@Component({
  selector: 'page-page2',
  templateUrl: 'profile_detail.html'
})

export class ProfileDetail {

  //users: User[];

  public user: User = {
          id: 1,
          email: "doggie@gmail.com",
          password: "admin123456",
          firstname: "aaaaaaaaaa",
          lastname: "bbbbbbbbbbbbbb",
          phone: "1111111",
          cookie: "2020202020202"
        };
  
  constructor(public navCtrl: NavController, private userService: UserService, public alertCtrl: AlertController) {}
  
  ngOnInit():void{
      this.userService.getUser(this.user)
        .subscribe(
        user => {
          this.user = user;
        },
        error => {
          console.log(error);
        });
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
              this.navCtrl.push(Home);
            });
          }
        }
      ]
    });
    confirm.present();
  }

  editProfile() {
    this.navCtrl.push(EditProfilePage);
  }
  
}
