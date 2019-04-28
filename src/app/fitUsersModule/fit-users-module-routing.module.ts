import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersDetailsResolverService } from '../services/users-details-resolver.service';

const routes: Routes = [
  { path: 'users', component: UsersComponent, 
    resolve:{
      usersdetails: UsersDetailsResolverService
    }
  },
  { path: 'user/:id', component: UserDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [UsersDetailsResolverService]
})
export class FitUsersModuleRoutingModule { }
