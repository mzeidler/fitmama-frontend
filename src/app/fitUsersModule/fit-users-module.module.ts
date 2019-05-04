import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FitUsersModuleRoutingModule } from './fit-users-module-routing.module';
import { UserMenusComponent } from './user-menus/user-menus.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { MatTableModule, MatInputModule, MatButtonModule, MatIconModule, MatTooltipModule, MatDialogModule, MatExpansionModule, MatBadgeModule, MatNativeDateModule, DateAdapter, NativeDateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ArrayPipe } from '../pipes/arraypipe';
import { MatChipsModule } from '@angular/material/chips';
import { EditUserMenusDialogComponent } from './edit-user-menus-dialog/edit-user-menus-dialog.component';
import { EditUserTrainingsDialogComponent } from './edit-user-trainings-dialog/edit-user-trainings-dialog.component';
import { EditUserRolesDialogComponent } from './edit-user-roles-dialog/edit-user-roles-dialog.component';
import { UserMyfitComponent } from './user-myfit/user-myfit.component';
import { EditUserDetailsDialogComponent } from './edit-user-details-dialog/edit-user-details-dialog.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';
import { DeleteUserDialogComponent } from './delete-user-dialog/delete-user-dialog.component';
import { MatMenuModule } from '@angular/material/menu';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MeasurementsDialogComponent } from './measurements-dialog/measurements-dialog.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule, MomentDateAdapter, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { MeasurementListComponent } from './measurement-list/measurement-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    UsersComponent,
    UserDetailsComponent,
    UserMenusComponent, 
    ArrayPipe,
    EditUserMenusDialogComponent,
    EditUserTrainingsDialogComponent,
    EditUserRolesDialogComponent,
    UserMyfitComponent,
    EditUserDetailsDialogComponent,
    DeleteUserDialogComponent,
    MeasurementsDialogComponent,
    MeasurementListComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    MatDialogModule,
    DragDropModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatChipsModule,
    MatRadioModule,
    MatGridListModule,
    MatExpansionModule,
    MatBadgeModule,
    MatMenuModule,
    CKEditorModule,
    FitUsersModuleRoutingModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatPaginatorModule
  ],
  entryComponents: [
    EditUserMenusDialogComponent,
    EditUserTrainingsDialogComponent,
    EditUserRolesDialogComponent,
    EditUserDetailsDialogComponent,
    DeleteUserDialogComponent,
    MeasurementsDialogComponent
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'hr-HR'}
  ],
})
export class FitUsersModuleModule { }
