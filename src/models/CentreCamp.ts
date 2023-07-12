import { FeedBacks } from "./FeedBacks";
import { Photo } from "./Photo";
import { FileHandle } from "./file-handle.model";

export class CentreCamp {
    public  id_centre !: number ; 
    public nom_centre !: String ;
    public adresse_centre !: String ;
    public  tel_centre !: String;
    public  email_centre !: String;
    public  tarif_nuitee !: number;
    public  places_disponibles !: number;
    public  photos_centre !: Set<FileHandle> ;
    public  photos !: Set<Photo> ; 
 
   
    constructor() {
       // this.id_centre = 0 ; 
        this.photos_centre = new Set<FileHandle>();
       // this.photos = [];
      }
      
}