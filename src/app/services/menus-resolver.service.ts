import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { MenusService } from '../services/menus.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenusResolverService implements Resolve<any> {

  constructor(private menusService: MenusService) { }

  resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): Observable<any> {
    return this.menusService.getMenus();
  }

}
