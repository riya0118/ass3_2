import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { GetProductsComponent } from './get-products/get-products.component';

const routes: Routes = [
  { path: "products", component: GetProductsComponent },
  { path: "product/create", component: AddProductComponent },
  { path: "product/edit/:id", component: EditProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
