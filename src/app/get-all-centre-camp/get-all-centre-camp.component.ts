import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CentreCampServiceService } from '../services/centre-camp-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CentreCamp } from 'src/models/CentreCamp';
import { FileHandle } from 'src/models/file-handle.model';
import { map } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ShowImageCentreCampComponent } from '../show-image-centre-camp/show-image-centre-camp.component';
import { ImageShowCentreService } from '../image-show-centre.service';


@Component({
  selector: 'app-add-centre-camp',
  templateUrl: './get-all-centre-camp.component.html',
  styleUrls: ['./get-all-centre-camp.component.css']
})
export class  GetAllCentreCampComponent implements OnInit {

  CenteCamps : CentreCamp[] = [] ; 
  cc !: CentreCamp ;
  imm : FileHandle[] = [] ;  
  


  constructor( private CentrecampService : CentreCampServiceService, private sanitizer : DomSanitizer
   ,public imageDialog : MatDialog,private router : Router , private showimages: ImageShowCentreService) { }

  ngOnInit(): void { 
    
    this.getAllCentreCamp() ; 
    
    console.log(this.CenteCamps);
  }

 public getAllCentreCamp ()
 {
  this.CentrecampService.getAllCentreCamp().pipe(
    map((c: CentreCamp[],i)=>c.map((centreCamp : CentreCamp) => this.showimages.createImages(centreCamp)))
  ).subscribe(
    res => 
    { 
      console.log(res) ;
      
      this.CenteCamps = res ; 
      console.log(res);
    },
    (error: HttpErrorResponse)  => 
    {
      console.log(error);
    }
  );
  console.log(this.CenteCamps);
 }

 delteCntre(id : any){

  this.CentrecampService.delteCentreCamp(id).subscribe(
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


 editCntre(id : any){

  this.router.navigate(['/addcentre',{id:id}])
  console.log('/addcentre',{id:id})
 }

 ShowImage(centreCamp : CentreCamp)
 {
  console.log(centreCamp);
  this.imageDialog.open(ShowImageCentreCampComponent,{
    data : {
      images : centreCamp.photos_centre 
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


showCentreDetails(id : any){

  this.router.navigate(['/detailsCentre',{id:id}])
}

}
