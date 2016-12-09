import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  Validator
} from '@angular/forms';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class ModalLoginPage {

	email : string;
	password : string; 

  constructor(public viewCtrl: ViewController,  private formBuilder: FormBuilder) {}

  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  login() {
  
  } 

}
