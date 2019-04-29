import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { TrainingsService } from '../services/trainings.service';

@Injectable({
  providedIn: 'root'
})
export class TrainingIdListResolverService implements Resolve<any> {

  constructor(private trainingsService: TrainingsService) { }

  resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot) {
    return this.trainingsService.getTrainingIdList();
  }

}
