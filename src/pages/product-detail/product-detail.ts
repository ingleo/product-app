import { Component } from '@angular/core';
import { Product } from '../../model/product';
import { NavParams } from 'ionic-angular';

import { ProductService } from "../../providers/product.service";
import { NavController,AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Home } from '../home/home';
/*
 Generated class for the ProductDetail page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html'
})
export class ProductDetailPage {

  productArray: Product;
  product: Product;
  id: number;
  productForm: FormGroup;
  aux1price: string;
  aux2quantity: string;


  constructor(public navParams: NavParams,
    private productService: ProductService,
    public navCtrl: NavController,
    public formBuilder: FormBuilder,private alertCtrl: AlertController) {
    this.id = navParams.get('p');
    this.getProductDetail(this.id);
    this.productForm = this.createProductForm();

  }

  getProductDetail(id: number) {
    this.productService.getProductDetail(id)
      .subscribe(
      response => {
        console.log(response);
        this.productArray = response;

        this.aux1price = this.productArray.price.toString();
        this.aux2quantity = this.productArray.price.toString();


      },
      err => { console.log(err) });
    //console.log(typeof this.product);
  }

  /*
  save(product: Product): void {

    product.price = Number(this.aux1price);
    product.quantity = Number(this.aux2quantity);
    this.productService.update(product)
      .subscribe(
      response => {
        console.log(response)
        this.navCtrl.pop();
      },
      err => { console.log(err) });
  }
  */

  save(product: Product): void {
    let alert = this.alertCtrl.create({
      title: 'Cambio de informacion',
      message: 'Confirma el Cambio del Producto '+product.name,
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
            this.productService.update(product)
              .subscribe(
                response => {console.log(response)
                  this.navCtrl.push(Home);},
                err => { console.log(err)});
          }
        }
      ]
    });
    alert.present();
  }

  private createProductForm() {
    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      type: ['', [Validators.required, Validators.minLength(6)]],
      quantity: ['', [Validators.required, Validators.minLength(1), Validators.pattern('^(0|[1-9][0-9]*)$')]],
      price: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^(0|[1-9][0-9]*)$')]],
      latitude: ['', []],
      longitude: ['', []]
    });
  }

  ionViewDidLoad() {
    console.log('Hello ProductDetailPage Page');
  }

}
