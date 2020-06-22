import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Subscription } from 'rxjs';

import { Game } from '../models/game';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private productService: ProductService) {}

  searchValue: string = '';
  shopProducts: Game[] = [];
  productListType: string = 'popular';

  sortByRating(a: Game, b: Game): number {
    return b.rating - a.rating;
  }

  sortByPublishDate(a: Game, b: Game): number {
    return parseInt(b.published, 10) - parseInt(a.published, 10);
  }

  onListTypeClick(listType): void | Subscription {
    if (!this.productService.products || !listType) {
      return null;
    }

    this.productListType = listType;

    return this.filterProductsByListType(listType);
  }

  onInputChange(evt: { target: HTMLInputElement }): Subscription {
    if (evt.target.value === '') {
      return this.filterProductsByListType(this.productListType);
    }

    return this.productService.products.subscribe((products: Game[]): void => {
      const sortFn = this.productListType === 'newest' ? this.sortByPublishDate : this.sortByRating;

      this.shopProducts = products
        .slice()
        .filter(({ name }) => name.toLowerCase().includes(evt.target.value))
        .sort(sortFn);
    });
  }

  filterProductsByListType(listType: string): Subscription {
    const sortFn = listType === 'newest' ? this.sortByPublishDate : this.sortByRating;

    return this.productService.products.subscribe((products: Game[]): void => {
      this.shopProducts = products.slice().sort(sortFn);
    });
  }

  ngOnInit() {
    this.productService.products.subscribe((products: Game[]): void => {
      this.shopProducts = products.slice().sort(this.sortByRating);
    });
  }
}
