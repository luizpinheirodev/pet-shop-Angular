import { Component, OnInit } from '@angular/core';
import { Product } from './product/product.model';
import { HttpClient } from '@angular/common/http'; //Anguar5
//import { Http } from '@angular/http'; Angular 2-4

@Component({
  selector: 'ttt-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  products: Product[] = [

  ]

  constructor(private http:HttpClient) { }

  ngOnInit() {
    //Arrow function
    this.http.get('http://localhost:3000/products').subscribe(
      (data:Product[]) => this.products = data,
      error =>{}
    )

    // mesma função acima
    // this.http.get('http://localhost:3000/products').subscribe(
    //   function (data:Product[]) {
    //     return this.products = data;
    //   },
    //   function (err){
    //     console.error(err)
    //   }
    // )


  }

}
