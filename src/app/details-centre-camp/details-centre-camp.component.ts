import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CentreCamp } from 'src/models/CentreCamp';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-details-centre-camp',
  templateUrl: './details-centre-camp.component.html',
  styleUrls: ['./details-centre-camp.component.css']
})
export class DetailsCentreCampComponent implements OnInit {

  constructor(private activatedRouter : ActivatedRoute) { }


  selectedCenterIndex = 0 ; 


  centreCamp : CentreCamp = new CentreCamp() ; 

  ngOnInit(): void {

    this.centreCamp= this.activatedRouter.snapshot.data['centreCamp'];
    console.log(this.centreCamp);

  }

  changeIndex(index : any)
  {
    this.selectedCenterIndex = index  ;
  }
}
