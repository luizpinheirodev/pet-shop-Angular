import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product.model';

@Component({
  selector: 'ttt-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  product: Product = new Product

  constructor() { }

  ngOnInit() {
  }

  enviarProduto(){
    alert('vai enviar')
  }

}
