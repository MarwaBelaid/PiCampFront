import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponentComponent } from './post-component/post-component.component';
import { HomeComponent } from './home/home.component';
import { ListProductsComponent } from './boutique/list-products/list-products.component';
import { DetailProductComponent } from './boutique/detail-product/detail-product.component';
import { ShoppingCartComponent } from './boutique/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './boutique/checkout/checkout.component';

const routes: Routes = [
  {path : '' ,redirectTo:'/home', pathMatch:'full'},
  {
    path: 'posts',
    component: PostComponentComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'shop',
    component: ListProductsComponent
  },
  {
    path:'detail-equipment/:id',
    component: DetailProductComponent
  },
  {
    path:'cart',
    component: ShoppingCartComponent
  },
  {
    path:'checkout',
    component: CheckoutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
