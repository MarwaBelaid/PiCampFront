import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BoutiqueService } from '../service/boutique.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  id!: any;
  idUser!: any;
  list!: any;
  commande!: any;
  constructor(
    private route: Router,
    private boutiqueService: BoutiqueService,
    private ac: ActivatedRoute
  ) {}
  ngOnInit(): void {

    this.idUser = 3
    this.boutiqueService.getCommandeByIdUser(this.idUser).subscribe(
      (result)=>{
        console.log('*******************Commande')
        console.log(result)
        this.commande =result
        this.id = result.id_commande
        this.boutiqueService.getAllEquipementCommande(this.id).subscribe(
          (res)=>{
            console.log('*******************lister panier')
            console.log(res)
            this.list  = res
          }
        )

      }
    )
  }

  onSubmit(data: any,idCommande: number) {
    const extractedData = Object.keys(data).map((key) => {
      const regex = /id-equi-comm-(\d+)-id-equi-(\d+)/;
      const match = regex.exec(key);
      const idEquiComm = match ? parseInt(match[1], 10) : null;
      const idEqui = match ? parseInt(match[2], 10) : null;
      return { idEquiComm, idEqui, value: data[key] };
    });
    for (const item of extractedData) {
      const idEquiCommande = item.idEquiComm;
      const qty = item.value;

      this.boutiqueService.updateCart(idCommande,idEquiCommande,qty).subscribe(
        (res)=>{
          console.log('*******************update')
          console.log(res)
        },
        (err) => {
          console.log("here",err);
        }
      )

    }
    window.location.reload();
    console.log(extractedData);
  }


}
