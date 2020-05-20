import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../products.service';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Products: Array<any> = [];

  constructor(private ps: ProductsService, private cart: CartService) {
  }

  ngOnInit(): void {
    this.ps.getAllProducts().subscribe(data => this.Products = data);
  }

  addToCart(index) {
    this.Products[index].count++;
    this.cart.addToCart(this.Products[index]);
  }

}
