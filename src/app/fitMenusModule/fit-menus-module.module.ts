import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FitMenusModuleRoutingModule } from './fit-menus-module-routing.module';
import { MenusComponent } from './menus/menus.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';

@NgModule({
  declarations: [MenusComponent, MenuDetailsComponent],
  imports: [
    CommonModule,
    FitMenusModuleRoutingModule
  ]
})
export class FitMenusModuleModule { }
