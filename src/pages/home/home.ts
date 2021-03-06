import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Product } from '../../model/product';
import { ProductService } from "../../providers/product.service";
import { ProductDetailPage } from '../product-detail/product-detail';
import { CreateProductPage } from '../create-product/create-product';

import { OptionsPage } from '../options/options';
import { Storage } from '@ionic/storage';
import { Network } from 'ionic-native';


@Component({
  selector: 'page-page2',
  templateUrl: 'home.html'
})
export class Home {

  private userSigned: any = { email: '', cookie: '' };
  public network: string;

  products: Product[];
  createProductPage = CreateProductPage;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private productService: ProductService,
    public storage: Storage,
    public alertCtrl: AlertController) { }

  ngOnInit() {
    console.log('inicio')
    Network.onConnect().subscribe(() => {
      this.network = Network.connection;
    });
      
    this.getCookieSession();
  }

  delete(product: Product): void {
    this.productService.deleteProduct(product)
      .subscribe(
      response => { console.log(response); this.getProducts() },
      err => { console.log(err) });
    //setTimeout(this.getCookieSession(), 2000);

    this.getCookieSession();

    console.log('constructor');
    this.getProducts();
  }

  getCookieSession() {
    this.storage.get("userSigned").then(res => {
      console.log(res);

      if (res != null) {
        this.userSigned.email = res['email'] == null ? '' : res['email'];
        this.userSigned.cookie = res['cookie'] == null ? '' : res['cookie'];
        this.getProducts();
      } else {
        console.log('redireccionando a options')
        this.navCtrl.pop();
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

  showConfirm(product: Product) {
    let confirm = this.alertCtrl.create({
      title: 'Eliminar',
      message: '¿Desea Eliminar Producto?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Si',
          handler: () => {
            console.log('Agree clicked');
            this.delete(product);
          }
        }
      ]
    });
    confirm.present();
  }
}
