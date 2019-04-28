import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FitTrainingsModuleRoutingModule } from './fit-trainings-module-routing.module';
import { AddTrainingDayDialogComponent } from './add-training-day-dialog/add-training-day-dialog.component';
import { AddTrainingDialogComponent } from './add-training-dialog/add-training-dialog.component';
import { DeleteTrainingDialogComponent } from './delete-training-dialog/delete-training-dialog.component';
import { EditTrainingUsersDialogComponent } from './edit-training-users-dialog/edit-training-users-dialog.component';
import { TrainingCalendarComponent } from './training-calendar/training-calendar.component';
import { TrainingDetailsComponent } from './training-details/training-details.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { RemoveTrainingDayDialogComponent } from './remove-training-day-dialog/remove-training-day-dialog.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatIconModule, MatBadgeModule, MatTooltipModule, MatListModule, MatDividerModule, DateAdapter } from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CalendarModule } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  declarations: [
    AddTrainingDayDialogComponent, 
    AddTrainingDialogComponent, 
    DeleteTrainingDialogComponent, 
    EditTrainingUsersDialogComponent, 
    TrainingCalendarComponent, 
    TrainingDetailsComponent, 
    TrainingsComponent, 
    RemoveTrainingDayDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    FitTrainingsModuleRoutingModule,
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
    MatDividerModule,
    CKEditorModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })    
  ],
  entryComponents: [
    AddTrainingDialogComponent,
    DeleteTrainingDialogComponent,
    EditTrainingUsersDialogComponent,
    RemoveTrainingDayDialogComponent,
    AddTrainingDayDialogComponent
  ]  
})
export class FitTrainingsModuleModule { }
