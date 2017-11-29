import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product/product.model';

@Component({
  selector: 'ttt-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  product: Product

  constructor(private http: HttpClient,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id']
    this.http.get(`http://localhost:3000/products/${id}`).subscribe(
      (data: Product) => this.product = data,
      error => {}
    )
  }

}
