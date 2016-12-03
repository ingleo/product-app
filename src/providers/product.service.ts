import {Injectable} from "@angular/core";
import {Product} from "../model/product";
import {User} from "../model/user";
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ProductService {

    private productsURI = 'http://138.68.0.83:7070/api/v1/product/';
    private usersURI = 'http://138.68.0.83:7070/api/v1/user/';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    getProducts(): Observable<Product[]> {
        return this.http.get(this.productsURI+'list')
            .map(response => response.json() as Product[])
            .catch(this.handleError);
    }

  getUsers(): Observable<User[]> {
    return this.http.get(this.usersURI+'list')
      .map(response => response.json() as User[])
      .catch(this.handleError);
  }


  getProductDetail(id : number): Observable<Product[]> {
    return this.http.get(this.productsURI+'detail/'+id)
      .map(response => response.json() as Product[])
      .catch(this.handleError);
  }

    deleteProduct(product: Product): Observable<Product[]> {

        let url = this.productsURI+'delete/'+product.id;
        return this.http.delete(url)
            .map(() => product)
            .catch(this.handleError);
    }

    update(product: Product): Observable<Product> {
        //console.log(product.id);
        let url = this.productsURI+'update/'+product.id;
        //console.log(url);
        let toAdd = JSON.stringify(product);
        //console.log(toAdd);
        return this.http
            .put(url, toAdd, {headers: this.headers})
            .map(() => product)
            .catch(this.handleError);
    }

    create(name: string, type: string, quantity: number, price: number): Observable<Product> {

        let toAdd = {"name": name, "type": type, "quantity": quantity, "price": price};

        //console.log(typeof toAdd);

        return this.http
            .post(this.productsURI+'create', toAdd, {headers: this.headers})
            .map(res => res.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Observable<any> {
        //console.error('An error occurred', error); // for demo purposes only
        return Observable.throw(error.message || error);
    }
}
