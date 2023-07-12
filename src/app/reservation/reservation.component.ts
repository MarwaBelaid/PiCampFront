import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/models/Activity';
import { DetailActivity } from 'src/models/DetailActivity';
import { Reservation } from 'src/models/Reservation';
import { ImageShowCentreService } from '../image-show-centre.service';
import { ActivityService } from '../activity.service';
import { map } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor(private showimages: ImageShowCentreService,private activityService: ActivityService) { }

  

  Activities : Activity[] = [] ; 
  nbNuit : number = 0 ; 
  reservation: Reservation = new Reservation();
 detailsActivityList : DetailActivity [] = [] ; 
 resList : DetailActivity [] = [] ; 
 idlist : number [] = []; 

 isNewRes = true ; 
  
 

formatDate(date: Date | undefined): string {
  const datePipe = new DatePipe('en-US');
  return date ? datePipe.transform(date, 'yyyy-MM-dd') || '' : '';
}
   
    
public getAllActivity ()
 {
  this.activityService.GetAllAct().pipe(
    map((c: Activity[],i)=>c.map((Activities : Activity) => this.showimages.createImagesAct(Activities)))
  ).subscribe(
    res => 
    { 
      console.log(res) ;
      
      this.Activities = res ; 
      console.log(res);
    },
    (error: HttpErrorResponse)  => 
    {
      console.log(error);
    }
  );
  console.log(this.Activities);
 }

  
  ngOnInit(): void {

 //   this.reservation= this.activatedRouter.snapshot.data['reservation'];
    
 this.getAllActivity () ; 

    if(this.reservation && this.reservation.id_reservation > 0)
    {
       this.isNewRes =false ; 
       this.resList = [] ; 

    }
  }

 



    

  prepareFormData(res : Reservation) : FormData
{
  
const formData = new FormData() ; 
Object.entries(res).forEach(([key, value]) => {
  formData.append(key, value);
});




console.log("aaaaaaaaaaaaaaaaaaaaaaaaa");

return formData; 

}

 


  submitActivityForm() {


    if(this.isNewRes== true)
    {
     // this.activity.photos = new Set<Photo>();

     
    //this.activity.detailsActivities = this.detailsActivityList;
    //console.log(this.activity.detailsActivities) ; 
    const Res =this.prepareFormData(this.reservation);
    this.activityService.addRes(Res,1,this.idlist,0).subscribe(
      res => 
      {
        console.log(res) ; 
      },
      (error: HttpErrorResponse)  => 
      {
        console.log(error);
      }
    );
    }


    else if(this.isNewRes== false)
    {
      /*console.log(this.activity) ; 
      var  a = new Activity() ; 
      a.id_activity = this.activity.id_activity;
      a.nom_activity = this.activity.nom_activity;
      a.description = this.activity.description;
      a.prix = this.activity.prix;
      a.capacite_min = this.activity.capacite_min;
      a.capacite_max = this.activity.capacite_max;
      a.age_min = this.activity.age_min;
      //a.type = this.activity.type;
      //a.photos = this.activity.photos;
   
      console.log(a);
  
      const act2 = this.prepareFormData3(a);
      this.activityService.updateActivity(act2).subscribe(
          res => 
          {
            console.log(res) ; 
          },
          (error: HttpErrorResponse)  => 
          {
            console.log(error);
          }
        );
         console.log(this.activity);
        }*/
    
  }




  





 
 
  






}





}
