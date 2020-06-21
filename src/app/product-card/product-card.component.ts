import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

import { Game } from '../models/game';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  constructor(
    private router: Router,
    public cartService: CartService,
    public productService: ProductService
  ) {}

  @Input() product: Game;

  routeToProductPage(): void {
    this.router.navigate(['product', this.product.id]);
  }

  productImageAltText(): string {
    return `Box for ${this.product.name}`;
  }
}
