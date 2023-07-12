import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Activity } from 'src/models/Activity';
import { ActivityService } from './activity.service';
import { ImageShowCentreService } from './image-show-centre.service';
import { Observable, of } from 'rxjs';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActvityResService  implements Resolve<Activity>{

  constructor(private ActivityService : ActivityService ,  private imageservice : ImageShowCentreService) { }

  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Activity> {
    const id = Number(route.paramMap.get("id"));
    console.log(id)
    if (id) {
      // Logique de résolution pour récupérer les détails du centre avec l'ID spécifié
      return this.ActivityService.GetActivity(id).pipe(map(a => this.imageservice.createImagesAct(a))) ;  
    
    } else {
      return of(new Activity());
    }
  }

}

