import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/models/product.model';

import { StoreService  } from '../../services/store.service';
import { ProductsService  } from '../../services/products.service';
//SINGLETON INDICA que solo se debe instaciar un servicio para todos los componenetes que lo requieran.
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit{

  myShoppingCart: Product[] = [];
  total = 0;
  products: Product[] = [];

  today = new Date;

  stringTochage = " Este es alga";

  date = new Date(2021, 1, 21);
  
  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
    ){
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void { // asincronismo
    this.productsService.getAllProducts()
    .subscribe(data => {
      this.products = data;
    })
  }
  onAddToShoppingCart(product: Product){
    //this.myShoppingCart.push(product); -- Cuando myShopincart no era un servicio y solo estaba en componente local.
    this.storeService.addProduct(product);// se llema al metodo del inyectado.
    
    this.total = this.myShoppingCart.reduce((sum, item) => sum + item.price, 0)// valido para luego restar productos
   // this.total += product.price;
  }
}
