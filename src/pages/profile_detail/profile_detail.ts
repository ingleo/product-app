import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../model/user'
import { UserService } from '../../providers/user-service'

@Component({
  selector: 'page-page2',
  templateUrl: 'profile_detail.html'
})
export class profile_detail {
  //users: User[];

  public user: User = {
          id: 1,
          email: "admin@admin.com",
          password: "admin123456",
          firstname: "admin",
          lastname: "server",
          phone: "1234566775"
        };
  
  constructor(public navCtrl: NavController, private userService: UserService) {}
  
  /*getUsers(){
    this.userService.getUsers()
      .subscribe(
        users => {
          this.users = users;
        },
        error => {
          console.log(error);
        });
  }*/


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

  
}
