import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material';

import { FitMenusModuleRoutingModule } from './fit-menus-module-routing.module';
import { MenusComponent } from './menus/menus.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';

@NgModule({
  declarations: [MenusComponent, MenuDetailsComponent],
  imports: [
    CommonModule,
    FitMenusModuleRoutingModule,
    MatExpansionModule,
    MatButtonModule,
  ]
})
export class FitMenusModuleModule { }
