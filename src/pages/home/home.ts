import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Product } from '../../model/product';
import {ProductService} from "../../providers/product.service";
import { ProductDetailPage } from '../product-detail/product-detail';

@Component({
  selector: 'page-page2',
  templateUrl: 'home.html'
})
export class Home {

  products: Product[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private productService: ProductService) {

    this.getProducts();

  }

  delete(product: Product): void {
    this.productService.deleteProduct(product)
      .subscribe(
        response => {console.log(response);this.getProducts()},
        err => { console.log(err)});
  }

  getProducts() {
    this.productService.getProducts()
      .subscribe(
        products => {
          this.products = products;
        },

        error => {
          console.log(error);
        }
      );
  }

  onSelect(id: number){
    this.navCtrl.push(ProductDetailPage,{p:id});
  }


}
