import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  Validator
} from '@angular/forms';

@Component({
  selector: 'page-pagelogin',
  templateUrl: 'pagelogin.html'
})

export class Pagelogin {
    email:string;
    password:string;

    constructor(public nav: NavController,  private formBuilder: FormBuilder) {

    }
login(){
  
} 
}
 
