import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/models/Activity';
import { DetailActivity } from 'src/models/DetailActivity';
import { ActivityService } from '../activity.service';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { FileHandle } from 'src/models/file-handle.model';
import { Photo } from 'src/models/Photo';
import { Observable, of } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.css']
})
export class AddActivityComponent implements OnInit {

  activity: Activity = new Activity();
  detailsActivity: DetailActivity = new DetailActivity();
 detailsActivityListUpdate : Set<DetailActivity> = new  Set<DetailActivity>();
 detailsActivityList : DetailActivity [] = [] ; 

  isNewActivity = true ; 
  options: string[] = ['PLEIN_AIR', 'JEUX_SPORTS' , 'AQUATIQUES' , 'DECOUVERTE_NATURE'
  ,'CREATIVES_ARTISANALES'
  , 'SOIREES_THEME_DIVERTISSEMENT' , 'ENFANTS'];

  currentPage = 1; // Numéro de la page actuelle
  itemsPerPage = 10; // Nombre d'éléments à afficher par page

  /*formatTime(time: string): string {
    if (time && typeof time === 'string') {
      const datePipe = new DatePipe('en-US');
      const timeValue = new Date();
      const timeParts = time.split(':');
      if (timeParts.length === 2) {
        timeValue.setHours(Number(timeParts[0]));
        timeValue.setMinutes(Number(timeParts[1]));
        return datePipe.transform(timeValue, 'HH:mm') || '';
      }
    }
    return '';
  }*/
  /*
  formatTime(time: string | number[]): string {
    if (typeof time === 'string') {
      const [hours, minutes] = time.split(':');
      return `${this.padZero(Number(hours))}:${this.padZero(Number(minutes))}`;
    }
    
    // Handle the case when `time` is not a string
    return '';
  }
  
  private padZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }*/

/***************** */


/*
  formatTime(timeArray: number[]): string {
    const hours = timeArray[0] < 10 ? `0${timeArray[0]}` : `${timeArray[0]}`;
    const minutes = timeArray[1] < 10 ? `0${timeArray[1]}` : `${timeArray[1]}`;
    return `${hours}:${minutes}`;
  }
  
  */
 /* formatTime(time: number[] | undefined): string {
    if (!time || time.length < 2) {
      return '';
    }
    const [hours, minutes] = time;
    return hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0');
  }*/
/*
  formatTime(time: number[] | undefined): string {
    if (!time || time.length < 2) {
      return '';
    }
    const [hours, minutes] = time;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  }
  */

  formatTime(time: number[] | undefined): string {
    if (typeof time === 'undefined' || time.length < 2 || typeof time[1] === 'undefined') {
      return '';
    }
    const [hours, minutes] = time;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  }
  
  /*formatTime(time: string | undefined): string {
    if (!time || time.length < 2) {
      return '';
    }
    const [hours, minutes] = time;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  }*/
  /*
  parseTime(timeString: string): number[] {
    const [hours, minutes] = timeString.split(':').map(Number);
    return [hours, minutes];
  }*/
  getAttribute()
  {
    const element = document.getElementById('heure_debut');
    if (element) {
     const value = element.getAttribute('value');
     console.log(value);
}
  }
  parseTime(timeString: string): number[] {
    const [hours, minutes] = timeString.split(':').map(Number);
    return [hours, minutes];
  }
  /*
  updateHeureDebut(value: string, indice: any): void {
    const detailsArray = Array.from(this.detailsActivityListUpdate);
    let heureDebut: string | undefined;
    let foundIndex: number | undefined;
  
    this.detailsActivityListUpdate.forEach((detail, index) => {
      if (!heureDebut && detail.heure_debut && detail.idDA === indice) {
        heureDebut = this.formatTime(detail.heure_debut);
        foundIndex = index;
      }
    });
  
    if (heureDebut !== undefined && foundIndex !== undefined) {
      detailsArray[foundIndex].heure_debut = this.parseTime(value);
      this.detailsActivityListUpdate = new Set(detailsArray);
    }
  }
  */
/*
  updateHeureDebut(value: string, indice: any): void {
    const detailsArray = Array.from(this.detailsActivityListUpdate);
    let heureDebut: string | undefined;
    let foundIndex: number | undefined = 0;
  
    for (const [index, detail] of detailsArray.entries()) {
      if (!heureDebut && detail.heure_debut && detail.idDA === indice) {
        heureDebut = this.formatTime(detail.heure_debut);
        foundIndex = index;
        break;
      }
    }
  
    if (heureDebut !== undefined && foundIndex !== undefined) {
      detailsArray[foundIndex].heure_debut = this.parseTime(value);
      this.detailsActivityListUpdate = new Set(detailsArray);
    }
  }*/
  formatTime2(time: number[] | undefined): number[] {
    if (!time || time.length < 2) {
      return [];
    }
    const [hours, minutes] = time;
    return [Number(hours), Number(minutes)];
  }
  
  updateHeureDebut(value: string,indice : any): void {
   //let heureDebut: string | undefined;
    let heureDebut: string | undefined = value;
    console.log(heureDebut);

    this.detailsActivityListUpdate.forEach(detail => {
      if (!heureDebut && detail.heure_debut) {
        heureDebut = value !== '' ? value : detail.heure_debut.join(':');
        console.log(heureDebut);
  
  }
});
  console.log(this.detailsActivityListUpdate);
  }
  /*for(let i =0 ; i< detailsArray.length;i++)
  {
    if( detailsArray[i].idDA == indice)
    {
      detailsArray[i].heure_debut = this.parseTime(value);
      this.detailsActivityListUpdate = new Set(detailsArray);
  console.log(this.detailsActivityListUpdate)
    }
  
   }
  }*/
    

formatDate(date: Date | undefined): string {
  const datePipe = new DatePipe('en-US');
  return date ? datePipe.transform(date, 'yyyy-MM-dd') || '' : '';
}
    showItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
  
   
    }
    getTotalPages(): number {
      return Math.ceil(this.detailsActivityList.length );
    }
    setupPagination() {
      const totalPages = Math.ceil(
        this.detailsActivityList.length / this.itemsPerPage
      );
  
      const paginationHtml = Array.from({ length: totalPages }, (_, i) => i + 1);
  
      return paginationHtml;
    }
  
    changePage(page : any) {
      this.currentPage = page;
      this.showItems();
    }


  
  ngOnInit(): void {

    this.activity= this.activatedRouter.snapshot.data['activity'];
    console.log("frgggggggg" ) ; 
    console.log(this.activity.detailsActivity ) ; 
    console.log(this.activity); 
    
    if(this.activity && this.activity.id_activity > 0)
    {
       this.isNewActivity =false ; 
       this.detailsActivityListUpdate = this.activity.detailsActivity ; 
       this.detailsActivityList = [] ; 
     console.log(this.activity.detailsActivity ) ; 

    }
  }

  convertSetToArray(set: Set<DetailActivity>): DetailActivity[] {
    return Array.from(set);
  }


  constructor(private activityService: ActivityService,private sanitizer : DomSanitizer,private activatedRouter : ActivatedRoute) {}

  addDetailActivity() {
    console.log(this.detailsActivityList) ;
    //this.detailsActivityList.push(this.detailsActivity);
    this.detailsActivityList.push(this.detailsActivity);

    this.detailsActivity = new DetailActivity();
    console.log(this.detailsActivityList) ;}


    

  

  UpdateDetailActivity(da : any)
  {

    if( this.detailsActivityList.length == 0 )
    {
      this.detailsActivityList = da ;
    }
    else {
      for(let i =0 ; i<this.detailsActivityList.length ; i++)
      { 
        if(da.idDA == this.detailsActivityList[i].idDA)
        this.detailsActivityList[i] = da ;
      }
    }
    console.log(this.detailsActivityList) ; 
    

  }


  submitActivityForm() {


    if(this.isNewActivity== true)
    {
     // this.activity.photos = new Set<Photo>();

     
    //this.activity.detailsActivities = this.detailsActivityList;
    //console.log(this.activity.detailsActivities) ; 
    const Activit =this.prepareFormData(this.activity);
    this.activityService.addAct(Activit).subscribe(
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
    }


    else if(this.isNewActivity== false)
    {
      console.log(this.activity) ; 
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
        }
    
  }




  private prepareFormData3(activity: Activity): FormData {
  
    const formData = new FormData();
    Object.entries(activity).forEach(([key, value]) => {
      if (key === 'photosFile') {
        for (const image of value) {
          formData.append('photosFile', image.file, image.file.name);
        }
      } else {
        formData.append(key, value);
      }
    });

    if(this.detailsActivityList.length>0)
    { const detailsJson = JSON.stringify(this.detailsActivityList);

     // Ajouter la chaîne JSON à FormData
     formData.append('listJson', detailsJson);
    }
    else 
    { 
      const detailsJson2 = JSON.stringify(this.detailsActivityListUpdate);
      formData.append('listJson', detailsJson2);
    }
    
      return formData;
    }
    
    
    
    removeImages(i : number)
{
        const photosActivity = Array.from(this.activity.photosFile); // Convertir l'ensemble en tableau
        photosActivity.splice(i, 1); // Supprimer l'élément à l'indice i dans le tableau
        this.activity.photosFile = new Set<FileHandle>(photosActivity); // Convertir le tableau en nouvel ensemble

}

fileDropped(fileHandle :FileHandle ){
  
  console.log(fileHandle) ; 
  this.activity.photosFile.add(fileHandle);
 
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

onFileSelected(event :any )
{
  console.log("aaaaaaaaaa") ; 
  console.log(event) ; 
  if(event.target.files)
  {
    const file = event.target.files[0];
    const fileHandler : FileHandle = {
      file : file, 
      url : this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file)) 
      
    }
    this.activity.photosFile.add(fileHandler);
  }
  console.log(event) ; 
  console.log(this.activity.photosFile);
}




 
 
  
prepareFormData(Act : Activity) : FormData
{
  
const formData = new FormData() ; 
Object.entries(Act).forEach(([key, value]) => {
  formData.append(key, value);
});
//const detailsJson = JSON.stringify(Act.detailsActivities);
//formData.append('listJson', detailsJson);

//const detailsArray = Array.from(Act.detailsActivities);

// Convertir le tableau en une chaîne JSON
const detailsJson = JSON.stringify(this.detailsActivityList);

// Ajouter la chaîne JSON à FormData
formData.append('listJson', detailsJson);

// Ajoutez les fichiers photos
/*for(var i = 0 ; i< Act.photosFile.length; i++)
{
  formData.append(
    'photosFile',Act.photosFile[i].file,
    Act.photosFile[i].file.name
    );
}*/
Object.entries(Act).forEach(([key, value]) => {
  if (key === 'photosFile') {
    for (const image of value) {
      formData.append('photosFile', image.file, image.file.name);
    }
  } else {
    formData.append(key, value);
  }
});




console.log("aaaaaaaaaaaaaaaaaaaaaaaaa");

return formData; 

}





}



