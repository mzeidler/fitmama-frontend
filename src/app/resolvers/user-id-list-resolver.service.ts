import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class UserIdListResolverService implements Resolve<any> {

  constructor(private userService: UsersService) { }

  resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot) {
    return this.userService.getUserIdList();
  }


}
