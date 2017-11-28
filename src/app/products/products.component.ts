import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ttt-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any[] = [
    { name: 'Racao Pedigree', description: 'A melhor racao do mundo'},
    { name: 'Osso para cachorro', description: 'Osso saboroso'},
    { name: 'Gaiola de Hamster', description: 'Compacta'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
