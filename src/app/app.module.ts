import { HeaderModule } from './layout/header/header.module';
import { ConfirmationModule } from './components/confirmation/confirmation.module';
import { CartModule } from './components/cart/cart.module';
// import { ProductItemComponent } from './components/product-item/product-item.component';
// import { HeaderComponent } from './layout/header/header.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { AngularEmojisModule } from 'angular-emojis';
const icons = {
  ArrowLeft
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BootstrapIconsModule.pick(icons),
    NgbModule,
    HttpClientModule,
    ProductListModule,
    ProductItemDetailModule,
    CartModule,
    HeaderModule,
    AngularEmojisModule,
    ConfirmationModule
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
