import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

import { Game } from '../models/game';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  constructor(
    private route: ActivatedRoute,
    public cartService: CartService,
    private productService: ProductService
  ) {}

  product: Game;

  productImageAltText(): string {
    return `Box for ${this.product.name}`;
  }

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    this.productService.products.subscribe((products: Game[]) => {
      this.product = products.find((prod) => prod.id === productId);
    });
  }
}
