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


  ngOnInit(): void {
    this.boutiqueService.fetchProducts().subscribe((result) => {
      this.list = result;
      console.log(this.list);
    });
  }

  addToCart(idProduct: number,idClient: number,qty:number) {
    this.boutiqueService.PasserCommande(idProduct,idClient,qty).subscribe(
      (result)=>{
        console.log('*******************')
        console.log(result)
      },
      (err) => {
        console.log(err);
      }
    )
  }


}
