import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../model/user'
import { UserService } from '../../providers/user-service'

@Component({
  selector: 'page-page2',
  templateUrl: 'profile_detail.html'
})
export class profile_detail {
  users: User[];
  
  constructor(public navCtrl: NavController, private userService: UserService) {}
  
  getUsers(){
    this.userService.getUsers()
      .subscribe(
        users => {
          this.users = users;
        },
        error => {
          console.log(error);
        });
  }

  ngOnInit():void{
      this.getUsers();
    }

  
}
