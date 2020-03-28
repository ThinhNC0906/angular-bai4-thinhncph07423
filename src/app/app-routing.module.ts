import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ServicesComponent } from "./services/services.component";
import { HomeComponent } from "./home/home.component";
import { ProductListComponent } from "./product-list/product-list.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: 'product-list', component: ProductListComponent},
 
  { path: "services", component: ServicesComponent },
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
