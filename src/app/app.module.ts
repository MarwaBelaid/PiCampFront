import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostComponentComponent } from './post-component/post-component.component';
import { AddPostComponent } from './add-post/add-post.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button'
import { ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ListProductsComponent } from './boutique/list-products/list-products.component';
import { DetailProductComponent } from './boutique/detail-product/detail-product.component';
import { HttpClientModule } from '@angular/common/http';
import { ShoppingCartComponent } from './boutique/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponentComponent,
    AddPostComponent,
    NavBarComponent,
    HomeComponent,
    ListProductsComponent,
    DetailProductComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
