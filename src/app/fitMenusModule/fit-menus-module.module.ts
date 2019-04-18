import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material';

import { FitMenusModuleRoutingModule } from './fit-menus-module-routing.module';
import { MenusComponent } from './menus/menus.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';
import { AddMenuDialogComponent } from './add-menu-dialog/add-menu-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';

@NgModule({
  declarations: [MenusComponent, MenuDetailsComponent, AddMenuDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    FitMenusModuleRoutingModule,
    MatExpansionModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  entryComponents: [
    AddMenuDialogComponent
  ]
})
export class FitMenusModuleModule { }
