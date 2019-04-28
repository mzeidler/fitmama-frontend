import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { UsersService } from '../services/users.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersDetailsResolverService implements Resolve<any> {

  constructor(private userService: UsersService) { }

  resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): Observable<any> {
    return this.userService.getUsers();
  }
}
