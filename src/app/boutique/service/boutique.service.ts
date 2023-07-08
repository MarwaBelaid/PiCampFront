import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipement } from '../model/Equipement';
import { Commande } from '../model/Commande';
import { CommandeEquipement } from '../model/CommandeEquipement';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class BoutiqueService {


  private productsUrl: string = 'http://127.0.0.1:8082/CampProject/';

  constructor(private http: HttpClient) { }

  fetchProducts(): Observable<Equipement[]> {
    return this.http.get<Equipement[]>(this.productsUrl + 'product/all');
  }

  PasserCommande(idProduct: any, idClient: any, qty: any) {
    const url = `${this.productsUrl}commande/passerCommande/${idProduct}/${idClient}?qty=${qty}`;
    const requestBody = { };
    return this.http.post(url, requestBody);
  }

  getProductById(id:any):Observable<Equipement>{
    return this.http.get<Equipement>(this.productsUrl + `product/${id}`)
     }


  searchProducts(priceMin : any,priceMax:any,size:any,color:any,catg:any): Observable<Equipement[]> {
    return this.http.get<Equipement[]>(this.productsUrl + `product/search?priceMin=${priceMin}&priceMax=${priceMax}&size=${size}&color=${color}&catg=${catg}`);
  }

  getAllEquipementCommande(id:any):Observable<CommandeEquipement[]>{
    return this.http.get<CommandeEquipement[]>(this.productsUrl + `commande/EquipementCommandebyid/${id}`)
     }


  getCommandeByIdUser(id:any):Observable<Commande>{
      return this.http.get<Commande>(this.productsUrl + `commande/CommandebyidUser/${id}`)
       }

      updateCart(idCommande: any, idEquiCommande: any, qty: any) {
        const url = `${this.productsUrl}commande/updateCart/${idCommande}/${idEquiCommande}/${qty}`;
        const requestBody = { };
        return this.http.put(url, requestBody);
      }

      checkout(idCommande: any, typeCommande: any, typePaiement: any,daysLocation:number) {
        const url = `${this.productsUrl}commande/updateCommande/${idCommande}`;
        const requestBody = {
          "typeCommande":typeCommande,
          "typePaiement":typePaiement,
          "daysLocation":daysLocation,
        };
        return this.http.put(url, requestBody);
      }


  getUser(id:any):Observable<User>{
    return this.http.get<User>(this.productsUrl + `commande/getUser/${id}`)
     }

}
