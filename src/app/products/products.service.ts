import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Product } from "./product/product.model";
import 'rxjs/add/operator/map';

@Injectable()
export class ProductsService{
    constructor(private http: HttpClient){}

    getAll() : Observable<Product[]> {
        return this.http.get('http://localhost:3000/products')
            //map do rxjs
            .map((products:any[]) => {
                //map de sobre um array
                return products.map(item => {
                    const {id, name, description, url, price} = item;
                    const product = new Product();
                    product.id = id;
                    product.name = name;
                    product.description = description;
                    product.url = url;
                    product.price = price;
                    return product;
                })
            })
    }

    getDetail(id: number) : Observable<Product>{
        return this.http.get(`http://localhost:3000/products/${id}`)
            .map((data:any)=> {
                    const product = new Product()
                    product.id  = data.id;
                    product.name = data.name;
                    product.description = data.description;
                    product.url = data.url;
                    return product;
                }
            )
    }

    insert(product: Product) : Observable<any> {
        return this.http.post(`http://localhost:3000/products/`, product)
            .map((res: any) => {
                console.log(res);
                debugger;
                return
            })
    }


}