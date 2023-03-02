import { CartModule } from './components/cart/cart.module';
// import { ProductItemComponent } from './components/product-item/product-item.component';
import { HeaderComponent } from './layout/header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductListModule } from './components/product-list/product-list.module';
import { ProductItemDetailModule } from './components/product-item-detail/product-item-detail.module';
import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { ArrowLeft, App, Bookmark } from 'ng-bootstrap-icons/icons';
const icons = {
  ArrowLeft
};
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BootstrapIconsModule.pick(icons),
    NgbModule,
    HttpClientModule,
    ProductListModule,
    ProductItemDetailModule,
    CartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
