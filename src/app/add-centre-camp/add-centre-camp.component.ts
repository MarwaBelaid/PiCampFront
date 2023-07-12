import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from 'src/models/file-handle.model';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, NgForm } from '@angular/forms';
import { CentreCamp } from 'src/models/CentreCamp';
import { CentreCampServiceService } from '../services/centre-camp-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/models/Photo';
import { Observable, forkJoin, of } from 'rxjs';
import { FeedBacks } from 'src/models/FeedBacks';
import { ImageShowCentreService } from '../image-show-centre.service';

@Component({
  selector: 'app-add-centre-camp',
  templateUrl: './add-centre-camp.component.html',
  styleUrls: ['./add-centre-camp.component.css']
})
export class AddCentreCampComponent implements OnInit {

  isNewCentre = true ; 

  centreCamp : CentreCamp = new CentreCamp() ; 
  updatedCamp : CentreCamp = new CentreCamp() ; 
 
  constructor( private CentrecampService : CentreCampServiceService, private sanitizer : DomSanitizer
    ,private activatedRouter : ActivatedRoute, private imgs: ImageShowCentreService) { }

  ngOnInit(): void {
    this.centreCamp= this.activatedRouter.snapshot.data['centreCamp'];
  
    if(this.centreCamp && this.centreCamp.id_centre != 0)
    {
       this.isNewCentre =false ; 
      console.log( this.isNewCentre ) ;
      
      console.log("this.centreCamp") ; 

      
      
    }
    /*else {this.centreCamp.feedbacks = new Set<FeedBacks>();
     this.centreCamp.photos = new Set<Photo>();}*/

  }

  onFileSelected(event :any )
  {
    if(event.target.files)
    {
      const file = event.target.files[0];
      const fileHandler : FileHandle = {
        file : file, 
        url : this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file))      }
      this.centreCamp.photos_centre.add(fileHandler);
    }
    console.log(event) ; 
    console.log(this.centreCamp.photos_centre);
  }
  
  
   update (CampForm: NgForm)
   {
    const camp =this.prepareFormData(this.centreCamp);

    console.log(this.centreCamp) ; 
    
    this.CentrecampService.updateCamp(camp).subscribe(
    res => 
    {
      console.log(res) ; 
    },
    (error: HttpErrorResponse)  => 
    {
      console.log(error);
    }
  );
   console.log(this.centreCamp);
  }
  
  addCentreCamp(CampForm: NgForm)
  {
    
    console.log(this.isNewCentre)
 
    if(this.isNewCentre== true)
      {
        this.centreCamp.photos = new Set<Photo>();
       

        const camp =this.prepareFormData(this.centreCamp);
      this.CentrecampService.addCamp(camp).subscribe(
      res => 
      {
        console.log(res) ; 
      },
      (error: HttpErrorResponse)  => 
      {
        console.log(error);
      }
    );
     console.log(this.centreCamp);
    }
  else if(this.isNewCentre== false)
  {
    console.log(this.centreCamp) ; 
    var  c = new CentreCamp() ; 
    c.id_centre  = this.centreCamp.id_centre ; 
    c.nom_centre  = this.centreCamp.nom_centre ; 
    c.photos_centre = this.centreCamp.photos_centre ; 
    c.adresse_centre = this.centreCamp.adresse_centre ; 
    c.email_centre = this.centreCamp.email_centre
    c.places_disponibles = this.centreCamp.places_disponibles
    c.tarif_nuitee = this.centreCamp.tarif_nuitee
    c.tel_centre = this.centreCamp.tel_centre
    console.log(c);

    const camp2 = this.prepareFormData3(c);
    this.CentrecampService.updateCamp(camp2).subscribe(
  
    res => 
    {
      console.log(res) ; 
    },
    (error: HttpErrorResponse)  => 
    {
      console.log(error);
    }
  );
   console.log(this.updatedCamp);
  }
  
  }

   public uploadImage(multipartFiles: File[]): Observable<Set<Photo>> {
      const images: Set<Photo> = new Set<Photo>();
    
      for (let i = 0; i < multipartFiles.length; i++) {
        const file: File = multipartFiles[i];
    
        const reader = new FileReader();
        reader.onloadend = () => {
          const picByte: string = reader.result as string; // Assign the result directly as string
          const photo: Photo = {
            name: file.name,
            type: file.type,
            picByte: picByte
          };
          images.add(photo);
        };
        reader.readAsDataURL(file); // Use readAsDataURL to obtain the result as a string
      }
    
      return of(images);
    }
    
prepareFormData(centreCamp : CentreCamp) : FormData
{
const formData = new FormData() ; 
Object.entries(this.centreCamp).forEach(([key, value]) => {
  formData.append(key, value);
});
 
  Object.entries(centreCamp).forEach(([key, value]) => {
    if (key === 'photos_centre') {
      for (const image of value) {
        formData.append('image', image.file, image.file.name);
      }
    } else {
      formData.append(key, value);
    }
  });

  return formData; 

}

removeImages(i : number)
{
  // this.centreCamp.photos_centre.splice(i,1) ;
const photosCentre = Array.from(this.centreCamp.photos_centre); // Convertir l'ensemble en tableau
photosCentre.splice(i, 1); // Supprimer l'élément à l'indice i dans le tableau
this.centreCamp.photos_centre = new Set<FileHandle>(photosCentre); // Convertir le tableau en nouvel ensemble
 
}

fileDropped(fileHandle :FileHandle ){
  
 // this.centreCamp.photos_centre.push(fileHandle);
   this.centreCamp.photos_centre.add(fileHandle);

 
}
private prepareFormData3(centreCamp: CentreCamp): FormData {
  
const formData = new FormData();
Object.entries(centreCamp).forEach(([key, value]) => {
  if (key === 'photos_centre') {
    for (const image of value) {
      formData.append('image', image.file, image.file.name);
    }
  } else {
    formData.append(key, value);
  }
});

  return formData;
}

}