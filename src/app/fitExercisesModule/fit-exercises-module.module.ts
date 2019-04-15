import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FitExercisesModuleRoutingModule } from './fit-exercises-module-routing.module';
import { ExercisesComponent } from './exercises/exercises.component';
import { ExerciseDetailsComponent } from './exercise-details/exercise-details.component';

@NgModule({
  declarations: [ExercisesComponent, ExerciseDetailsComponent],
  imports: [
    CommonModule,
    FitExercisesModuleRoutingModule
  ]
})
export class FitExercisesModuleModule { }
