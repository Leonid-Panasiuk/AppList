import { Component, OnInit } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';


@Component({
  selector: 'app-list-app',
  templateUrl: './list-app.component.html',
  styleUrls: ['./list-app.component.css']
})
export class ListAppComponent implements OnInit {
  currentProductName: string;
  products: Product[] = [];
  currentProductPrice: number;
  pricing = [];
  total: number;
  
  constructor() { }

  ngOnInit() {
    
  }
  onClick() {
    let product = new Product();
    product.name = this.currentProductName;
    product.price = this.currentProductPrice;
    this.products.push(product);
    this.total = 0;
    this.products.forEach(product => {
      this.total += product.price
    });
    
  }
  deleteProduct(i) {
    this.products.splice(i, 1);
    this.total = 0;
    this.products.forEach(product => {
      this.total += product.price

    });
  }

};
class Product {
  name: string;
  price: number;
  total: number;
}



