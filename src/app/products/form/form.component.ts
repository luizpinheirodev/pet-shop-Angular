import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product.model';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ttt-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  product: Product = new Product

  constructor(private productsService: ProductsService,
              private router: Router) { }
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
      data=>{
        this.router.navigate(['/produtos'])
      },
      error=>{

      }
    )
    //alert('vai enviar')
  }

  deletarProduto(id){
    this.productsService.delete(id).subscribe(
      data=>{
        this.router.navigate(['/produtos'])
      },
      error=>{
        
      }
    )
    //alert('vai enviar')
  }

}
