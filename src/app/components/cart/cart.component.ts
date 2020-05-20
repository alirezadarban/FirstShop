import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  fee;
  message = "Thank You! You're items are ready to ship!";
  constructor(private cart: CartService, private user: AuthService) {
  }

  ngOnInit(): void {
    this.items = this.cart.getItems();
    this.fee = this.items[1];
    this.items = this.items[0];
  }

  addBill(){
    if (!this.items.length) {
      this.message = 'Cart is Empty!'
      return;
    }
    if (!this.user.user){
      this.message = 'Please Login!'
      return;
    }
    this.cart.addBill(this.user.user.email);
  }

}
