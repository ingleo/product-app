import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Product } from '../../model/product';
import { ProductService } from "../../providers/product.service";
import { ProductDetailPage } from '../product-detail/product-detail';
import { CreateProductPage } from '../create-product/create-product';

@Component({
  selector: 'page-page2',
  templateUrl: 'home.html'
})
export class Home {

  products: Product[];
  createProductPage = CreateProductPage;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private productService: ProductService) {

  }

  ionViewWillEnter() {
    this.getProducts();
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

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    setTimeout(() => {
      this.getProducts();
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  onSelect(id: number) {
    this.navCtrl.push(ProductDetailPage, { p: id });
  }


}
