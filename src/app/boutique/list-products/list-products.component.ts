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
  searchList = '';
  selectedCategory = '';
  selectedColor = '';
  selectedSize = '';
  priceMax = 1500;
  priceMin  = 10;

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
    { id: 4, name: 'Green'},
    { id: 5, name: 'Blue'},
    { id: 6, name: 'Black'},
  ];

  size = [
    { id: 1, name: 'Large' },
    { id: 2, name: 'Medium' },
    { id: 3, name: 'Small'},
  ];

  ngOnInit(): void {
    this.search(this.priceMin ,this.priceMax ,this.selectedSize ,this.selectedColor ,this.selectedCategory);
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

  search(priceMin: number, priceMax: number, size: string, color: string, catg: string) {

    console.log(this.priceMin ,this.priceMax ,this.selectedSize ,this.selectedColor ,this.selectedCategory)
    if (!priceMin && !priceMax && !size && !color && !catg) {
      this.boutiqueService.fetchProducts().subscribe((result) => {
        this.list = result;
        console.log("All product listing");
        console.log(this.list);
      });
    } else {
      this.boutiqueService.searchProducts(priceMin, priceMax, size, color, catg).subscribe(
        (result) => {
          console.log('Search product listing');
          this.list = result;
          console.log(result);
        },
        (err) => {
          console.log("Error:", err);
        }
      );
    }
  }
  onSubmit(){
    console.log(this.priceMin)
    console.log(this.priceMax)
  }


}

