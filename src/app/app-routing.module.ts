import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponentComponent } from './post-component/post-component.component';
import { HomeComponent } from './home/home.component';
import { ListProductsComponent } from './boutique/list-products/list-products.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
