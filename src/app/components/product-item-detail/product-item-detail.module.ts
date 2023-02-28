import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ProductItemDetailComponent } from './product-item-detail.component';
import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { ArrowLeft, App, Bookmark } from 'ng-bootstrap-icons/icons';

const icons = {
  ArrowLeft
};
@NgModule({
  declarations: [
    ProductItemDetailComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    BootstrapIconsModule.pick(icons)
  ],
  exports:[
    ProductItemDetailComponent,
    BootstrapIconsModule
  ]
})
export class ProductItemDetailModule { }
