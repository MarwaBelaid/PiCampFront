import { Component, OnInit } from '@angular/core';
import { BoutiqueService } from '../service/boutique.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  idUser!: any;
  list!: any;
  commande!: any;
  commandeTotal!: any;
  id!: any;
  firstName!: any;
  lastName!: any;
  phone!: any;
  adress!: any;
  email!: any;
  typeCommande='';
  typePaiement='';
  dureeLocation=0;
  numCarte!: any;
  pin!: any;
  constructor(private boutiqueService: BoutiqueService,private router: Router) {}

  ngOnInit(): void {

    this.idUser = 3
    this.boutiqueService.getCommandeByIdUser(this.idUser).subscribe(
      (result)=>{
        console.log('*******************Commande')
        console.log(result)
        this.commande =result
        this.commandeTotal =this.commande.montant_total
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
    this.boutiqueService.getUser(this.idUser).subscribe(
      (result)=>{
        console.log('*******************User')
        console.log(result)
        this.firstName = result.prenom_user
        this.lastName = result.nom_user
        this.adress = result.adresse_user
        this.phone = result.tel_user
        this.email = result.email_user
      }
    )
  }
  isInputInvalid(form: NgForm, fieldName: string): boolean {
    const control = form.form.get(fieldName);
    return (control?.touched ?? false) && (control?.invalid ?? false);
  }
  onCheckout(data: any) {
      this.boutiqueService.checkout(this.id,data.typeCommande,data.typePaiement,data.dureeLocation).subscribe(
        (res)=>{
          console.log('*******************update')
          console.log(res)
        },
        (err) => {
          console.log("here",err);
        }
      )
      this.router.navigate(['/shop']);}

}
