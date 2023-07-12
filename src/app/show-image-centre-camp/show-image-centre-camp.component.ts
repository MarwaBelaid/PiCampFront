import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FileHandle } from 'src/models/file-handle.model';
@Component({
  selector: 'app-show-image-centre-camp',
  templateUrl: './show-image-centre-camp.component.html',
  styleUrls: ['./show-image-centre-camp.component.css']
})
export class ShowImageCentreCampComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit(): void {

this.recieveImages() ; 

  }

  recieveImages()
  {
    console.log(this.data); 
  }

}
