import {Injectable} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  fee = 0;
  constructor(private firestore: AngularFirestore ) {
  }

  addToCart(product) {
    let flag = false;
    for (let i = 0; i < this.items.length; i++) {
      if (product.Name === this.items[i].Name) {
        flag = true;
        break;
      }
    }
    if (!flag) {
      this.items.push(product);
    }
  }

  getItems() {
    for (let i = 0; i < this.items.length; i++) {
      this.fee += this.items[i].Price * this.items[i].count;
    }
    return [this.items, this.fee];
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  addBill(email){
    return this.firestore.collection('Bills').add({
     email: email, bill: this.items});
  }
}
