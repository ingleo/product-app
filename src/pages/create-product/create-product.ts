import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

/*
  Generated class for the CreateProduct page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-create-product',
  templateUrl: 'create-product.html'
})
export class CreateProductPage {

  productForm: FormGroup;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {
    this.productForm = this.createProductForm();
  }

  ionViewDidLoad() {
    console.log('Hello CreateProductPage Page');
  }

  saveProduct(){
    console.log(this.productForm.value);
  }

  private createProductForm(){
    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      type: ['', [Validators.required, Validators.minLength(5)]],
      quantity: ['', [Validators.required, Validators.minLength(5)]],
      price: ['', [Validators.required, Validators.minLength(4)]],
    });
  }
}
