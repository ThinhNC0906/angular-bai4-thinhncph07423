import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CategoryComponent } from './category/category.component';
import { BrandsComponent } from './brands/brands.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RecoComponent } from './reco/reco.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CategoryComponent, BrandsComponent, ProductListComponent, RecoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
