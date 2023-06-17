export class Commande {

  public id_commande!: number;
  public date_achat_commande!: Date;
  public date_debut_location!: Date;
  public date_fin_location!: Date;
  public etat!: string;
  public montant_totale!: number;
  public quantite_totale!: number;
  public type_commande!: string;
  public type_paiement!: string;
  public commande_utilisateur!: number;

}
