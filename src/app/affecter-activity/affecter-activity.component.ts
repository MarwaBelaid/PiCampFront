import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CentreCampServiceService } from '../services/centre-camp-service.service';
import { CentreCamp } from 'src/models/CentreCamp';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-affecter-activity',
  templateUrl: './affecter-activity.component.html',
  styleUrls: ['./affecter-activity.component.css']
})
export class AffecterActivityComponent implements OnInit {

selectedOption!: string;

constructor(
  public dialogRef: MatDialogRef<AffecterActivityComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any,
  private centrecampService: CentreCampServiceService,private activityService: ActivityService
) { }
centre !: CentreCamp[] ; 

ngOnInit(): void {
  const activityId: number = this.data.activityId;
  this.centrecampService.getAllCentreCamp().subscribe(
    (centres: CentreCamp[]) => {
      this.centre = centres;
    },
    (error) => {
      console.error('Une erreur s\'est produite lors de la récupération de la liste des centres de camping.', error);
    }
  );
}

onAffecter(id : any): void {
  // Récupérer l'ID de l'activité et l'option sélectionnée
  const activityId = this.data.activityId;
  const selectedOption = this.selectedOption;

  // Effectuer les actions nécessaires avec l'ID de l'activité et l'option sélectionnée
  console.log('ID de l\'activité :', activityId);
  console.log('Centre de camping sélectionné :', selectedOption);

  this.dialogRef.close(selectedOption);

  this.activityService.affecterActivityAuCentreCamp(activityId, id).subscribe(
    response => {
      console.log('L\'activité a été affectée au centre de camping avec succès.');
    },
    error => {
      console.error('Une erreur s\'est produite lors de l\'affectation de l\'activité au centre de camping.', error);
    }
  );
}

onCancel(): void {
  this.dialogRef.close();
}

  


}
