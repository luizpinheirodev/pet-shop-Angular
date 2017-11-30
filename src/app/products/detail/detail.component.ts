import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product/product.model';
import { ProductsService } from './../products.service';

@Component({
  selector: 'ttt-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ ProductsService ] //se utilizar em toda app, declarar no app.module
})

export class DetailComponent implements OnInit {
  product: Product = new Product
  today = new Date()

  constructor(private productService: ProductsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id']
    this.productService.getDetail(id).subscribe(
      (data: Product) => this.product = data,
      error => {}
    )
  }

}
