import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

import { Game } from '../models/game';

@Component({
  selector: 'cart-flyout',
  templateUrl: './cart-flyout.component.html',
  styleUrls: ['./cart-flyout.component.css']
})
export class CartFlyoutComponent {
  constructor(
    private router: Router,
    public cartService: CartService,
    public productService: ProductService
  ) {}

  calculateTotal(cart: Game[]): string {
    return cart.reduce((sum, product) => sum + parseFloat(product.price), 0).toFixed(2);
  }

  onCheckoutClick(): void {
    this.cartService.setShowCart(false);
    this.router.navigate(['checkout']);
    this.cartService.updateCart([]);
  }
}
