import { Injectable } from '@angular/core';
import { TrainingsService } from './trainings.service';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TrainingsResolverService implements Resolve<any> {

  constructor(private trainingsService: TrainingsService) { }

  resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot) {
    return this.trainingsService.getTrainings();
  }
}
