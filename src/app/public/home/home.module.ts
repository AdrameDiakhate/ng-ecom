import { ProductsModule } from './../products/products.module';
import { ProductsRoutingModule } from './../products/products-routing.module';
import { ProductsComponent } from './../products/products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ProductsModule
  ]
})
export class HomeModule { }
