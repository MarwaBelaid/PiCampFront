import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CentreCamp } from 'src/models/CentreCamp';

@Injectable({
  providedIn: 'root'
})
export class CentreCampServiceService {

  constructor(private httpClient: HttpClient) { 

  }
  private apiUrl = 'http://127.0.0.1:8082/CampProject/CentreCamp';

  public addCamp (Centrecamp: any)
  {
  
    return this.httpClient.post<CentreCamp>('http://127.0.0.1:8082/CampProject/CentreCamp/add-CentreCamp',Centrecamp);
  }

  updateCamp(camp: FormData) {
    return this.httpClient.put<CentreCamp>('http://127.0.0.1:8082/CampProject/CentreCamp/Update-CentreCamp', camp);
  }
  
/*
  public updateCamp(Centrecamp: any)
  {
    return this.httpClient.put<CentreCamp>('http://127.0.0.1:8082/CampProject/CentreCamp/Update-CentreCamp',Centrecamp);

  }*/
  /*updateCamp(formData: FormData): Observable<CentreCamp> {
    const headers = new HttpHeaders().append('Content-Type', 'multipart/form-data');
  
    return this.httpClient.put<CentreCamp>(`${this.apiUrl}/Update-CentreCamp`, formData, { headers: headers });
  }*/
 
  public getAllCentreCamp() : Observable<CentreCamp[]>
  {
    return this.httpClient.get<CentreCamp[]>('http://127.0.0.1:8082/CampProject/CentreCamp/Get-All-CentreCamp')
  }


  public delteCentreCamp(id : number) 
  {
    return this.httpClient.delete('http://127.0.0.1:8082/CampProject/CentreCamp/Remove-CentreCamp/'+id) ; 
  }

  public GetCentreCamp(id : number) : Observable<CentreCamp>
  {
    console.log(id);
    return this.httpClient.get<CentreCamp>('http://127.0.0.1:8082/CampProject/CentreCamp/Get-Only-CentreCamp/'+id) ; 
  }

}
