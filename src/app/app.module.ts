;
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { BrandsComponent } from './brands/brands.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RecoComponent } from './reco/reco.component';
import { ServicesComponent } from './services/services.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ProductService } from './services/product.service';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MenuComponent } from './menu/menu.component';
import { SlideComponent } from './slide/slide.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { CategoryComponent } from './category/category.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, CategoryComponent, BrandsComponent, ProductListComponent, RecoComponent, ServicesComponent, HomeComponent, ProductsComponent, ProductDetailComponent, MenuComponent, SlideComponent, ProductManagerComponent, NotFoundComponent, EditProductComponent ],
  bootstrap:    [ AppComponent ],
   providers: [ProductService]
})
export class AppModule { }
