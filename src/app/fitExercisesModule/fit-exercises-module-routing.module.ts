import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExercisesComponent } from './exercises/exercises.component';
import { ExerciseDetailsComponent } from './exercise-details/exercise-details.component';

const routes: Routes = [
  { path: 'exercises', component: ExercisesComponent },
  { path: 'exercise/:id', component: ExerciseDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FitExercisesModuleRoutingModule { }
