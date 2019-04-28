import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainingDetailsComponent } from './training-details/training-details.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { UsersResolverService } from '../services/users-resolver.service';
import { TrainingsResolverService } from '../services/trainings-resolver.service';

const routes: Routes = [
  { path: 'trainings', component: TrainingsComponent, 
    resolve:{
      users: UsersResolverService,
      trainings: TrainingsResolverService
    }
  },
  { path: 'training/:id', component: TrainingDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [UsersResolverService, TrainingsResolverService]
})
export class FitTrainingsModuleRoutingModule { }
