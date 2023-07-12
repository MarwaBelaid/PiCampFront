import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map} from 'rxjs/operators';
import { CentreCamp } from 'src/models/CentreCamp';
import { CentreCampServiceService } from './services/centre-camp-service.service';
import { ImageShowCentreService } from './image-show-centre.service';

@Injectable({
  providedIn: 'root'
})
export class CentreRService implements Resolve<CentreCamp>{

  constructor(private CentreCampServiceService : CentreCampServiceService, private imageservice : ImageShowCentreService) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CentreCamp> {
    const id = Number(route.paramMap.get("id"));
    console.log(id)
    if (id) {
      // Logique de résolution pour récupérer les détails du centre avec l'ID spécifié
      return this.CentreCampServiceService.GetCentreCamp(id).pipe(map(c => this.imageservice.createImages(c))) ;  
    
    } else {
      return of(new CentreCamp());
    }
  }

}
