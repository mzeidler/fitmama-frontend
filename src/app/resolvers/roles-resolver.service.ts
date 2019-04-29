import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { RolesService } from '../services/roles.service';

@Injectable({
  providedIn: 'root'
})
export class RolesResolverService implements Resolve<any> {
  
  constructor(private rolesService: RolesService) { }

  resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot) {
    return this.rolesService.getRoles();
  }

}
