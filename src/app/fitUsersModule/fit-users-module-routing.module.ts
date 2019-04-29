import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UsersDetailsResolverService } from '../resolvers/users-details-resolver.service';
import { UserMyfitComponent } from './user-myfit/user-myfit.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent, 
    resolve:{
      usersdetails: UsersDetailsResolverService
    }
  },
  { path: 'user/:id', component: UserMyfitComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [UsersDetailsResolverService]
})
export class FitUsersModuleRoutingModule { }
