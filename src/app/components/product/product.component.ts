import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model'; // enlazar con product model// model expecifica q realmente necesita
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{

  @Input('productCh') product: Product = {
    id: '',
    price: 0,
    image: '',
    title: '',
    category: '',
    description: ''
    // se debe crear un estado inical.
  }

  @Output() addedProduct = new EventEmitter<Product>(); // Enviando producto al padre.

  constructor(){
  }
  ngOnInit(): void {  
  }
  onAddToCart(){
    this.addedProduct.emit(this.product);
  }
}
