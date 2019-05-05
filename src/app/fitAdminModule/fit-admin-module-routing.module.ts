import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  { 
    path: 'admin', 
    component: AdminComponent, 
    canActivate: [AuthGuard], 
    data: { roles: ['ADMIN'] } 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FitAdminModuleRoutingModule { }
