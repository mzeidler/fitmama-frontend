import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenusComponent } from './menus/menus.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';

const routes: Routes = [
  { path: 'menus', component: MenusComponent },
  { path: 'menu/:id', component: MenuDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FitMenusModuleRoutingModule { }
