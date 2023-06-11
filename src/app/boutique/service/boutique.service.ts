import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipement } from '../model/Equipement';

@Injectable({
  providedIn: 'root'
})
export class BoutiqueService {


  private productsUrl: string = '/api/CampProject/';

  constructor(private http: HttpClient) { }

  fetchProducts(): Observable<Equipement[]> {
    return this.http.get<Equipement[]>(this.productsUrl + 'product/all');
  }

  fetchImagePath(id:any):Observable<string>{
    return this.http.get<string>(this.productsUrl+'product/image/' +id)
     }
}
