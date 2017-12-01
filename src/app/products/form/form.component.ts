import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'ttt-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  product: Product = new Product

  constructor(private productsService: ProductsService) { }
  // ou abaixo
  /*
  constructor(){
    this.productsService = new ProductsService()
  }
  */

  ngOnInit() {
  }

  enviarProduto(){
    this.productsService.insert(this.product).subscribe(
      data=>{},
      error=>{}
    )
    //alert('vai enviar')
  }

}
