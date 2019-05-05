import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainingDetailsComponent } from './training-details/training-details.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { TrainingsResolverService } from '../resolvers/trainings-resolver.service';
import { UserIdListResolverService } from '../resolvers/user-id-list-resolver.service';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  { 
    path: 'trainings', 
    component: TrainingsComponent, 
    resolve:{
      useridlist: UserIdListResolverService,
      trainings: TrainingsResolverService
    },
    canActivate: [AuthGuard],
    data: { roles: ['EXERCISE_ADMIN'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [UserIdListResolverService, TrainingsResolverService]
})
export class FitTrainingsModuleRoutingModule { }
