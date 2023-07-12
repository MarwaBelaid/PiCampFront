import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Activity } from 'src/models/Activity';
import { DetailActivity } from 'src/models/DetailActivity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private httpClient: HttpClient) { }

  public addAct (formData: any)
  {
    /*console.log(list) ; 
    const detailsJson = JSON.stringify(list);
    formData.append('listJson', detailsJson);*/

  //  const headers = new HttpHeaders();
  //headers.set('Content-Type', 'multipart/form-data');


  return this.httpClient.post('http://127.0.0.1:8082/CampProject/activity/add-Activity', formData);
}

delteActivity(id_activity : any)
{
  return this.httpClient.delete('http://127.0.0.1:8082/CampProject/activity/Remove-Activity/'+id_activity) ; 

}

updateActivity(formData: any)
{
  return this.httpClient.put('http://127.0.0.1:8082/CampProject/activity/Update-Activity', formData);

}

  public GetAllAct (): Observable<Activity[]>
  {
    return this.httpClient.get<Activity[]>('http://127.0.0.1:8082/CampProject/activity/Get-All-Activities');
  }

  public GetActivity(id : number) : Observable<Activity>
  {
    console.log(id);
    return this.httpClient.get<Activity>('http://127.0.0.1:8082/CampProject/activity/GetOnlyActivity/'+id) ; 
  }

  affecterActivityAuCentreCamp(idActivity: number, idCamp: number): Observable<string> {
    const url = 'http://127.0.0.1:8082/CampProject/activity/AffecterActivityToCentreCamp/' + idActivity + '/' + idCamp;
  
    return this.httpClient.put(url, null, { responseType: 'text' })
      .pipe(
        map(response => response as string)
      );
  }

  addRes (formData: any,id : number,list : number[], nbNuit : number)
  {
    return this.httpClient.post('http://127.0.0.1:8082/CampProject/Reservation/add-Reservation/'+id+'/'+list+'/'+nbNuit, formData);

  }
 /* affecterActivityAuCentreCamp(idActivity: number, idCamp: number): Observable<string> {
    
    
    return this.httpClient.put<string>('http://127.0.0.1:8082/CampProject/activity/AffecterActivityToCentreCamp/'+idActivity+'/'+idCamp) ; 

  }*/

}
