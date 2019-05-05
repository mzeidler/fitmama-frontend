import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenusComponent } from './menus/menus.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';
import { MenusResolverService } from '../resolvers/menus-resolver.service';
import { UserIdListResolverService } from '../resolvers/user-id-list-resolver.service';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  { 
    path: 'menus', 
    component: MenusComponent, 
    resolve:{
      useridlist: UserIdListResolverService,
      menus: MenusResolverService
    },
    canActivate: [AuthGuard],
    data: { roles: ['MENU_ADMIN'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [UserIdListResolverService, MenusResolverService]
})
export class FitMenusModuleRoutingModule { }
