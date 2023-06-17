import { Component, OnInit } from '@angular/core';
import { Equipement } from '../model/Equipement';
import { BoutiqueService } from '../service/boutique.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  id!: any;
  qty = 1;
  equipement = new Equipement();
  ngOnInit(): void {
    this.id = this.ac.snapshot.params['id']
    this.boutiqueService.getProductById(this.id).subscribe(
      (result)=>{
        console.log('*******************detail-product')
        console.log(result)
        this.equipement = result
      }
    )
  }
  addToCart(idProduct: number,idClient: number,qty:number) {
    this.boutiqueService.PasserCommande(idProduct,idClient,qty).subscribe(
      (result)=>{
        console.log('*******************commande passer from details')
        console.log(result)
      },
      (err) => {
        console.log(err);
      }
    )
  }
  constructor(
    private route: Router,
    private boutiqueService: BoutiqueService,
    private ac: ActivatedRoute
  ) {}

}

