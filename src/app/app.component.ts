import { Component } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(public productService: ProductService) {}

  ngOnInit() {
    this.productService.fetchProducts();
  }
}
