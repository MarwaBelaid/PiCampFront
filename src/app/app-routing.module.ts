import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponentComponent } from './post-component/post-component.component';
import { AddPostComponent } from './add-post/add-post.component';
import { HomeComponent } from './home/home.component';
import { ListProductsComponent } from './boutique/list-products/list-products.component';
import { DetailProductComponent } from './boutique/detail-product/detail-product.component';
import { AddCentreCampComponent } from './add-centre-camp/add-centre-camp.component';
import { GetAllCentreCampComponent } from './get-all-centre-camp/get-all-centre-camp.component';
import { CentreRService } from './centre-r.service';
import { DetailsCentreCampComponent } from './details-centre-camp/details-centre-camp.component';
import { AddActivityComponent } from './add-activity/add-activity.component';
import { ShowActivitiesComponent } from './show-activities/show-activities.component';
import { ActvityResService } from './actvity-res.service';
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [
  {path : '' ,redirectTo:'/home', pathMatch:'full'},
  {
    path: 'posts',
    component: PostComponentComponent
  },
  {
    path: 'addPost',
    component: AddPostComponent
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
    path:'addcentre',
    component: AddCentreCampComponent,
    resolve : {
      centreCamp : CentreRService
    }
  },
  {
    path:'GetAllcentre',
    component: GetAllCentreCampComponent
  },
  {
    path:'detailsCentre',
    component: DetailsCentreCampComponent,
    resolve : {
      centreCamp : CentreRService
    }
  },
  {
    path:'AddActivity',
    component: AddActivityComponent,
    resolve : {
      activity : ActvityResService
    }
  },

  {
    path:'GetAllActivity',
    component: ShowActivitiesComponent
  },
  {
    path:'reservation',
    component: ReservationComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
