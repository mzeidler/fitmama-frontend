import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FitUsersModuleRoutingModule } from './fit-users-module-routing.module';
import { UserMeasurementsComponent } from './user-measurements/user-measurements.component';
import { UserMenusComponent } from './user-menus/user-menus.component';
import { UserExercisesComponent } from './user-exercises/user-exercises.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { MatTableModule, MatInputModule, MatButtonModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ArrayPipe } from '../pipes/arraypipe';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    UsersComponent,
    UserDetailsComponent,
    UserMeasurementsComponent, 
    UserMenusComponent, 
    UserExercisesComponent,
    ArrayPipe],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatChipsModule,
    FitUsersModuleRoutingModule
  ]
})
export class FitUsersModuleModule { }
