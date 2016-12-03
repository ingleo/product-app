import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-pagelogin',
  templateUrl: 'pagelogin.html'
})
export class Pagelogin {
    username:string;
    password:string;

    constructor(public nav: NavController, public http: Http, public authenticationApi: AuthenticationApi) {
    }

    login() {
        this.authenticationApi.login(this.userName, this.password).subscribe(
             data => {      
               //Navigate to home page              
                this.nav.setRoot(HomePage);
             }
        )
    }
}
 
