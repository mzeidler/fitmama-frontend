import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { FitMenusModuleRoutingModule } from './fit-menus-module-routing.module';
import { MenusComponent } from './menus/menus.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';
import { AddMenuDialogComponent } from './add-menu-dialog/add-menu-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DeleteMenuDialogComponent } from './delete-menu-dialog/delete-menu-dialog.component';
import { EditMenuUsersDialogComponent } from './edit-menu-users-dialog/edit-menu-users-dialog.component';
import { MatBadgeModule } from '@angular/material/badge';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { MenuCalendarComponent } from './menu-calendar/menu-calendar.component';

@NgModule({
  declarations: [
    MenusComponent, 
    MenuDetailsComponent, 
    AddMenuDialogComponent, 
    DeleteMenuDialogComponent, 
    EditMenuUsersDialogComponent, 
    MenuCalendarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    FitMenusModuleRoutingModule,
    MatExpansionModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatBadgeModule,
    DragDropModule,
    MatListModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  entryComponents: [
    AddMenuDialogComponent,
    DeleteMenuDialogComponent,
    EditMenuUsersDialogComponent
  ]
})
export class FitMenusModuleModule { }
