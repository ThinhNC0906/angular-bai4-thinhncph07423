import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ServicesComponent } from "./services/services.component";
import { HomeComponent } from "./home/home.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductManagerComponent } from "./product-manager/product-manager.component";
import { NotFoundComponent } from "./not-found/not-found.component";


const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: 'product-list', component: ProductListComponent},
  { path: 'product/detail/:id', component: ProductDetailComponent},
 { path: 'product-manager', component: ProductManagerComponent},
  { path: "services", component: ServicesComponent },
   { path: '404', component: NotFoundComponent},
   { path: '**', redirectTo: '404', pathMatch: 'full'},
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
