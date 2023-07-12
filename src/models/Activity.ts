import { DetailActivity } from "./DetailActivity";
import { Photo } from "./Photo";
import { FileHandle } from "./file-handle.model";

export class Activity {

    id_activity!: number;
    nom_activity!: string;
    description!: string;
    prix!: number;
    capacite_min!: number;
    capacite_max!: number;
    age_min!: number;
    type!: string;
    photos!: Set<Photo> 
    photosFile!: Set<FileHandle> ;
    detailsActivity !: Set<DetailActivity>  ;
  
  
    constructor() {
        this.photosFile = new Set<FileHandle>();
        
       // this.detailsActivities = new Set<DetailActivity>()  ;

        //this.details = [];
     
      }
}