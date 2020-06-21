import { Injectable } from '@angular/core';

import { Game } from '../models/game';

@Injectable()
export class CartService {
  showCart: boolean = false;
  cart: Game[] = [];

  updateCart(newCart: Game[]): void {
    this.cart = newCart;
  }

  addToCart(product: Game): void {
    const productIsInCart = this.cart.find((prod) => prod.id === product.id);

    if (!productIsInCart) {
      this.cart = [...this.cart, product];
    }
  }

  setShowCart(bool: boolean): void {
    this.showCart = bool;
  }
}
