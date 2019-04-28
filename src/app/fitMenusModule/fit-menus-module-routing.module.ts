import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenusComponent } from './menus/menus.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';
import { UsersResolverService } from '../services/users-resolver.service';
import { MenusResolverService } from '../services/menus-resolver.service';

const routes: Routes = [
  { path: 'menus', component: MenusComponent, 
    resolve:{
      users: UsersResolverService,
      menus: MenusResolverService
    }  
  },
  { path: 'menu/:id', component: MenuDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [UsersResolverService, MenusResolverService]
})
export class FitMenusModuleRoutingModule { }
