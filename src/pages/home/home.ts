import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Product } from '../../model/product';
import { ProductService } from "../../providers/product.service";
import { ProductDetailPage } from '../product-detail/product-detail';

import { OptionsPage } from '../options/options';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-page2',
  templateUrl: 'home.html'
})
export class Home {

  private userSigned : any = { email: '', cookie: ''};


  products: Product[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private productService: ProductService,
              public storage: Storage) 
  {
    this.getProducts();
  }

  ngOnInit()
  {
    console.log('inicio')
      this.storage.get("userSigned").then(res => {
        console.log(res);

        if (res != null)
        {
            this.userSigned.email = res['email'] == null ? '' : res['email']; 
            this.userSigned.cookie = res['cookie'] == null ? '' : res['cookie'];
        } else 
        {
            console.log('redireccionando a options')
            this.navCtrl.push(OptionsPage);

        }

      }).catch((error) => {
        console.log('Error getting user signed', error);
      });


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
