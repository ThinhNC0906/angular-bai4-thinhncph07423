;
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CategoryComponent } from './category/category.component';
import { BrandsComponent } from './brands/brands.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RecoComponent } from './reco/reco.component';
import { ServicesComponent } from './services/services.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ProductService } from './services/product.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, CategoryComponent, BrandsComponent, ProductListComponent, RecoComponent, ServicesComponent, HomeComponent ],
  bootstrap:    [ AppComponent ],
   providers: [ProductService]
})
export class AppModule { }
