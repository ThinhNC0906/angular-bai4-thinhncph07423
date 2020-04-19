;
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { BrandsComponent } from './home/brands/brands.component';
import { ProductListComponent } from './home/product-list/product-list.component';
import { RecoComponent } from './home/reco/reco.component';
import { ServicesComponent } from './services/services.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ProductService } from './services/product.service';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './admin/product-detail/product-detail.component';
import { MenuComponent } from './home/menu/menu.component';
import { SlideComponent } from './home/slide/slide.component';
import { ProductManagerComponent } from './admin/product-manager/product-manager.component';
import { NotFoundComponent } from './home/not-found/not-found.component';
import { EditProductComponent } from './a/edit-product/edit-product.component';
import { CategoryComponent } from './home/category/category.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, CategoryComponent, BrandsComponent, ProductListComponent, RecoComponent, ServicesComponent, HomeComponent, ProductsComponent, ProductDetailComponent, MenuComponent, SlideComponent, ProductManagerComponent, NotFoundComponent, EditProductComponent ],
  bootstrap:    [ AppComponent ],
   providers: [ProductService]
})
export class AppModule { }
