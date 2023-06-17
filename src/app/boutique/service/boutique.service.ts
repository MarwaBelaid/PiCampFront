import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipement } from '../model/Equipement';
import { Commande } from '../model/Commande';

@Injectable({
  providedIn: 'root'
})
export class BoutiqueService {


  private productsUrl: string = '/api/CampProject/';

  constructor(private http: HttpClient) { }

  fetchProducts(): Observable<Equipement[]> {
    return this.http.get<Equipement[]>(this.productsUrl + 'product/all');
  }

  PasserCommande(idProduct: any, idClient: any, qty: any) {
    const url = `${this.productsUrl}commande/passerCommande/${idProduct}/${idClient}?qty=${qty}`;
    const requestBody = { };
    return this.http.post(url, requestBody);
  }




}
