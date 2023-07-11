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
  idClient = 3;
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
      ()=>{
        console.log('*******************commande passer from details')
        alert("commande passer avec succée")
      },
      (err) => {
        console.log(err);
        if(err.status==200){
          alert("commande passer avec succée")

        }else{
          alert("il ya eu une erreur essayer plus tard!")
        }
      }
    )
  }
  constructor(
    private route: Router,
    private boutiqueService: BoutiqueService,
    private ac: ActivatedRoute
  ) {}

}

