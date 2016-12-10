import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from '../../model/user'
import { UserService } from '../../providers/user-service'
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
//import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit_profile.html'
})
export class EditProfilePage {
  userForm: FormGroup;
  constructor(public navCtrl: NavController, private userService: UserService, public formBuilder: FormBuilder) {
    this.userForm = this.createUserForm();
  }

  public user: User = {
          id: 1,
          email: "doggie@gmail.com",
          password: "admin123456",
          firstname: "aaaaaaaaaa",
          lastname: "bbbbbbbbbbbbbb",
          phone: "1111111",
          cookie: "2020202020202"
        };
	
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




    /**********Formulario***************/
    saveUser(){
      console.log(this.userForm.value);
    }

    private createUserForm() {
      return this.formBuilder.group({
        name: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
        phone: ['', Validators.required]
    });
  }


}
