import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { MenusService } from '../services/menus.service';

@Injectable({
  providedIn: 'root'
})
export class MenuIdListResolverService implements Resolve<any> {

  constructor(private menusService: MenusService) { }

  resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot) {
    return this.menusService.getMenuIdList();
  }

}
