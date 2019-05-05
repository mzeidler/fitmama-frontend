import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserMyfitComponent } from './user-myfit/user-myfit.component';
import { UsersResolverService } from '../resolvers/users-resolver.service';
import { MenuIdListResolverService } from '../resolvers/menu-id-list-resolver.service';
import { TrainingIdListResolverService } from '../resolvers/training-id-list-resolver.service';
import { RoleIdListResolverService } from '../resolvers/role-id-list-resolver.service';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  { 
    path: 'users', component: UsersComponent, 
    resolve:{
      menuidlist: MenuIdListResolverService,
      trainingidlist: TrainingIdListResolverService,
      roleidlist: RoleIdListResolverService,
      users: UsersResolverService
    },
    canActivate: [AuthGuard],
    data: { roles: ['ADMIN'] }
  },
  { 
    path: 'user/:id', 
    component: UserMyfitComponent,
    canActivate: [AuthGuard],
    data: { roles: ['USER'] }
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [UsersResolverService, MenuIdListResolverService, TrainingIdListResolverService, RoleIdListResolverService]
})
export class FitUsersModuleRoutingModule { }
