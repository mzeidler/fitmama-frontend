import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FitAdminModuleRoutingModule } from './fit-admin-module-routing.module';
import { GroupsComponent } from './groups/groups.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    GroupsComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    FitAdminModuleRoutingModule
  ]
})
export class FitAdminModuleModule { }
