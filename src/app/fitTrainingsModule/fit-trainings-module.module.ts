import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FitExercisesModuleRoutingModule } from './fit-trainings-module-routing.module';
import { AddTrainingDayDialogComponent } from './add-training-day-dialog/add-training-day-dialog.component';
import { AddTrainingDialogComponent } from './add-training-dialog/add-training-dialog.component';
import { DeleteTrainingDialogComponent } from './delete-training-dialog/delete-training-dialog.component';
import { EditTrainingUsersDialogComponent } from './edit-training-users-dialog/edit-training-users-dialog.component';
import { TrainingCalendarComponent } from './training-calendar/training-calendar.component';
import { TrainingDetailsComponent } from './training-details/training-details.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { RemoveTrainingDayDialogComponent } from './remove-training-day-dialog/remove-training-day-dialog.component';

@NgModule({
  declarations: [AddTrainingDayDialogComponent, AddTrainingDialogComponent, DeleteTrainingDialogComponent, EditTrainingUsersDialogComponent, TrainingCalendarComponent, TrainingDetailsComponent, TrainingsComponent, RemoveTrainingDayDialogComponent],
  imports: [
    CommonModule,
    FitExercisesModuleRoutingModule
  ]
})
export class FitTrainingsModuleModule { }
