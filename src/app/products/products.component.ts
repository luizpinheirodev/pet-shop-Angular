import { Component, OnInit } from '@angular/core';
import { Product } from './product/product.model';
import { HttpClient } from '@angular/common/http'; //Anguar5
//import { Http } from '@angular/http'; Angular 2-4
import { ProductsService } from './products.service';

@Component({
  selector: 'ttt-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  //product: Product = new Product
  products: Product[] = [
  ]

  constructor(private productService:ProductsService) { }

  ngOnInit() {
    //Arrow function
    this.productService.getAll().subscribe(
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
