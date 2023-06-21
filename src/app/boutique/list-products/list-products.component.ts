import { Component, OnInit } from '@angular/core';
import { BoutiqueService } from '../service/boutique.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  list!: any;
  constructor(private boutiqueService: BoutiqueService) {}

  categories = [
    { id: 1, name: 'shoes' },
    { id: 2, name: 'clothes' },
    { id: 3, name: 'campsMaterials'},
  ];

  color = [
    { id: 1, name: 'White' },
    { id: 2, name: 'Gray' },
    { id: 3, name: 'Red'},
    { id: 3, name: 'Green'},
    { id: 3, name: 'Blue'},
    { id: 3, name: 'Black'},
  ];

  size = [
    { id: 1, name: 'Large' },
    { id: 2, name: 'Medium' },
    { id: 3, name: 'Small'},
  ];

  priceMax =1500
  priceMin = 0

  ngOnInit(): void {
    this.boutiqueService.fetchProducts().subscribe((result) => {
      this.list = result;
      console.log(this.list);
    });

    this.search(0 ,1500,"Small","Blue","campsMaterials");

  }

  addToCart(idProduct: number,idClient: number,qty:number) {
    this.boutiqueService.PasserCommande(idProduct,idClient,qty).subscribe(
      (result)=>{
        console.log('*******************commande passer')
        console.log(result)
      },
      (err) => {
        console.log("here",err);
      }
    )
  }

  search(priceMin : number,priceMax:number,size:String,color:String,catg:String) {
    this.boutiqueService.searchProducts(priceMin ,priceMax,size,color,catg).subscribe(
      (result)=>{
        console.log('*******************done searching')
        console.log(result)
      },
      (err) => {
        console.log("here",err);
      }
    )
  }

}
