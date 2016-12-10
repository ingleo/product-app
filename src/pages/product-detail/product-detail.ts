import { Component } from '@angular/core';
import { Product } from '../../model/product';
import { NavParams } from 'ionic-angular';
import {ProductService} from "../../providers/product.service";
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

  productArray: Product[];
  product: Product;
  id : number;



  constructor(public navParams: NavParams,
              private productService: ProductService) {
    this.id = navParams.get('p');
    this.getProductDetail(this.id);

  }

  getProductDetail(id: number) {
    this.productService.getProductDetail(id)
      .subscribe(
        response => {console.log(response);this.productArray = response;},
        err => { console.log(err)});
    //console.log(typeof this.product);
  }

  save(product: Product): void {
    this.productService.update(product)
      .subscribe(
        response => {console.log(response)},
        err => { console.log(err)});
  }

  delete(product: Product): void {
    this.productService.deleteProduct(product)
      .subscribe(
        response => {console.log(response);},
        err => { console.log(err)});


  }

  ionViewDidLoad() {
    console.log('Hello ProductDetailPage Page');
  }

}
