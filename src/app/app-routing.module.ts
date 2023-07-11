import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponentComponent } from './post-component/post-component.component';
import { HomeComponent } from './home/home.component';
import { ListProductsComponent } from './boutique/list-products/list-products.component';
import { DetailProductComponent } from './boutique/detail-product/detail-product.component';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ProfileComponent} from "./profile/profile.component";
import {BoardUserComponent} from "./board-user/board-user.component";
import {BoardModeratorComponent} from "./board-moderator/board-moderator.component";
import {BoardAdminComponent} from "./board-admin/board-admin.component";
import { SecurityinterfaceComponent } from './securityinterface/securityinterface.component';


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


  { path: 'SecHome', component: SecurityinterfaceComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
