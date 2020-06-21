import { Component, Input } from '@angular/core';

import { Game } from '../models/game';

@Component({
  selector: 'cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent {
  @Input() product: Game;
  @Input() last: boolean;

  productImageAltText(): string {
    return `Box for ${this.product.name}`;
  }
}
