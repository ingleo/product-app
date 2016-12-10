import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../model/user'
import { UserService } from '../../providers/user-service'
import { AlertController } from 'ionic-angular';
import { EditProfilePage } from '../edit_profile/edit_profile';
import { Home } from '../home/home';
import { OptionsPage } from '../options/options';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-page2',
  templateUrl: 'profile_detail.html'
})

export class ProfileDetail {

  //users: User[];
  private userSigned : any = { email: '', cookie: ''};
  private user: User = {
          id: 0,
          email: "",
          password: "",
          firstname: "",
          lastname: "",
          phone: "",
          cookie: ""
        };
  /*
  public user: User = {
          id: 1,
          email: "doggie@gmail.com",
          password: "admin123456",
          firstname: "aaaaaaaaaa",
          lastname: "bbbbbbbbbbbbbb",
          phone: "1111111",
          cookie: "2020202020202"
        };
  */
  constructor(
    public navCtrl: NavController,
    private userService: UserService, 
    public alertCtrl: AlertController,
    public storage: Storage) {}
  
  ngOnInit():void{
      this.storage.get("userSigned").then(res =>{
        console.log(res);
        if (res != null)
        {
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


        } else 
        {
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
            this.userService.remove(this.userSigned).subscribe(res => {
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
