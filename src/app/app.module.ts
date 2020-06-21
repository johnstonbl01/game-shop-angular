import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartFlyoutComponent } from './cart-flyout/cart-flyout.component';
import { CartProductComponent } from './cart-product/cart-product.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { HomeComponent } from './home/home.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    CartFlyoutComponent,
    AppHeaderComponent,
    CartProductComponent,
    HomeComponent,
    ProductCardComponent,
    SearchInputComponent,
    CheckoutComponent,
    ProductDetailComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ProductService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule {}
