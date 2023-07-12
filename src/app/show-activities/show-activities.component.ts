import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/models/Activity';
import { ImageShowCentreService } from '../image-show-centre.service';
import { ActivityService } from '../activity.service';
import { map } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ShowImageCentreCampComponent } from '../show-image-centre-camp/show-image-centre-camp.component';
import { AffecterActivityComponent } from '../affecter-activity/affecter-activity.component';
import { CentreCampServiceService } from '../services/centre-camp-service.service';
import { CentreCamp } from 'src/models/CentreCamp';

@Component({
  selector: 'app-show-activities',
  templateUrl: './show-activities.component.html',
  styleUrls: ['./show-activities.component.css']
})
export class ShowActivitiesComponent implements OnInit {

  constructor(private showimages: ImageShowCentreService,private activityService: ActivityService,private router : Router ,
    public imageDialog : MatDialog,public dialog : MatDialog,private CentrecampService : CentreCampServiceService,) { }

  Activities : Activity[] = [] ; 

   C : CentreCamp[] = [] ; 
  ngOnInit(): void {
    this.getAllCentreCamp() ; 
    
    console.log(this.Activities);
  }

 public getAllCentreCamp ()
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


 deleteAct(id_activity : any)
 {
  this.activityService.delteActivity(id_activity).subscribe(
    res => 
    { 
      console.log(res) ;
      this.getAllCentreCamp() ; 
    },
    (error: HttpErrorResponse)  => 
    {
      console.log(error);
    }
  );

 }



 editAct(id_activity : any)
 {

    this.router.navigate(['/AddActivity',{id:id_activity}])
    console.log('/AddActivity',{id:id_activity})
   
 }



 showActDetails(id_activity : any)
 {

 }

 
 ShowImage(act : Activity)
 {
  console.log(act);
  this.imageDialog.open(ShowImageCentreCampComponent,{
    data : {
      images : act.photosFile 
    },
    height : '500px',
    width : '800px'
  }) ; 
 }
 getPhotoDataUrl(f : any) {
  const byteCharacters = String.fromCharCode.apply(null, f.picByte);
  const base64 = btoa(byteCharacters);
  return `data:${f.type};base64,${base64}`;
}


openDialog(activityId: number): void {
  const cen = this.CentrecampService.getAllCentreCamp().pipe(
    map(centres => centres.map(centre => centre.nom_centre))
  );

  const dialogRef = this.dialog.open(AffecterActivityComponent, {
    width: '400px',
    data: {
      title: 'Ma boîte de dialogue',
      options: cen,
      activityId: activityId
    }
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('Option sélectionnée :', result);
  });
}
}
