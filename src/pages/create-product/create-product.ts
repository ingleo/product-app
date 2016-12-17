import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Geolocation } from 'ionic-native';
import { Product } from '../../model/product';
import { ProductService } from '../../providers/product.service';

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
  lat: number;
  lng: number;
  product = new Product();


  constructor(public navCtrl: NavController,
              public formBuilder: FormBuilder,
              private productService: ProductService,
              private alertCtrl: AlertController) {
    this.productForm = this.createProductForm();
  }

  ionViewDidLoad() {
    console.log('Hello CreateProductPage Page');
  }

/*
  saveProduct(){
    console.log(this.productForm.value);
    this.product.name = this.productForm.value.name;
    this.product.type = this.productForm.value.type;
    this.product.quantity = this.productForm.value.quantity;
    this.product.price = this.productForm.value.price;
    this.product.latitude = this.lat;
    this.product.longitude = this.lng;

    this.productService.create(this.product)
      .subscribe(product => {
        console.log('product created');
      });

    this.navCtrl.pop();
  }
  */

  saveProduct(){
    let alert = this.alertCtrl.create({
      title: 'Creando Producto',
      message: 'Confirma Creacion del Producto '+this.productForm.value.name,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Click en cancelar');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            console.log(this.productForm.value);
            this.product.name = this.productForm.value.name;
            this.product.type = this.productForm.value.type;
            this.product.quantity = this.productForm.value.quantity;
            this.product.price = this.productForm.value.price;
            this.product.latitude = this.lat;
            this.product.longitude = this.lng;

            this.productService.create(this.product)
              .subscribe(product => {
                console.log('product created');
              });

            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  }

  ngOnInit(){
    Geolocation.getCurrentPosition({enableHighAccuracy: true, maximumAge: 3000, timeout: 5000}).then(resp => {
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
      
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  private createProductForm(){
    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      type: ['', [Validators.required, Validators.minLength(6)]],
      quantity: ['', [Validators.required, Validators.minLength(1)]],
      price: ['', [Validators.required, Validators.minLength(5)]],
    });
  }
}
