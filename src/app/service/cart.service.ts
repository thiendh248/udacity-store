import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ProductListModal} from "../product-list/product-list.model";

@Injectable({
  providedIn: 'root',
})
export class CartService {

  listCart: ProductListModal[] = [];

  constructor() {}

  addProduct(data: ProductListModal, selectedAmount: number) {
    if (this.listCart.length > 0) {
      const findCart = this.listCart.find((item:ProductListModal) => item.id === data.id)
      if (findCart) {
        findCart.amount = findCart.amount! + selectedAmount
        return this.listCart
      } else {
        return this.listCart.push({...data, amount: selectedAmount})
      }
    } else {
      return this.listCart.push({...data, amount: selectedAmount})
    }
  }

}
