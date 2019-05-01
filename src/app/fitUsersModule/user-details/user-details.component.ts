import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../model/user';
import { Menu } from 'src/app/model/menu';
import { Training } from 'src/app/model/training';
import { Role } from 'src/app/model/role';
import { MatDialog } from '@angular/material';
import { EditUserRolesDialogComponent } from '../edit-user-roles-dialog/edit-user-roles-dialog.component';
import { EditUserMenusDialogComponent } from '../edit-user-menus-dialog/edit-user-menus-dialog.component';
import { EditUserTrainingsDialogComponent } from '../edit-user-trainings-dialog/edit-user-trainings-dialog.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input()
  user: User;

  @Input()
  allMenus: Menu[];

  @Input()
  allTrainings: Training[]; 

  @Input()
  allRoles: Role[]; 

  @Output() 
  updateMenusRequest = new EventEmitter<User>();

  @Output() 
  updateTrainingsRequest = new EventEmitter<User>();

  @Output() 
  updateRolesRequest = new EventEmitter<User>();

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  editUser() {

  }

  deleteUser() {

  }

  editMenus() {

    if (!this.user.menus) {
      this.user.menus = [];
    }

    // Populate userMenus array
    let userMenus = [...this.user.menus];

    // Populate otherMenus array
    let otherMenus = [];
    this.allMenus.forEach(menu1 => {
      let found = false;

      this.user.menus.forEach(m => {
        if (m.id == menu1.id) {
          found = true;
        }
      })

      if (!found) {
        otherMenus.push(menu1);
      }
    });

    // Show Dialog
    const dialogRef = this.dialog.open(EditUserMenusDialogComponent, {
      width: '500px', data: { 
        userMenus: userMenus,
        otherMenus: otherMenus,
        user: this.user
      }
    });

    // Save Dialog Results
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.user.menus = userMenus.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        this.updateMenusRequest.emit(this.user);
      }

    }); 
  }

  editTrainings() {

    if (!this.user.trainings) {
      this.user.trainings = [];
    }

    // Populate userTrainings array
    let userTrainings = [...this.user.trainings];

    // Populate otherTrainings array
    let otherTrainings = [];
    this.allTrainings.forEach(training1 => {
      let found = false;

      this.user.trainings.forEach(t => {
        if (t.id == training1.id) {
          found = true;
        }
      })

      if (!found) {
        otherTrainings.push(training1);
      }
    });

    // Show Dialog
    const dialogRef = this.dialog.open(EditUserTrainingsDialogComponent, {
      width: '500px', data: { 
        userTrainings: userTrainings,
        otherTrainings: otherTrainings,
        user: this.user
      }
    });

    // Save Dialog Results
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.user.trainings = userTrainings.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        this.updateTrainingsRequest.emit(this.user);
      }

    }); 

  }

  editRoles() {

    if (!this.user.roles) {
      this.user.roles = [];
    }

    // Populate userRoles array
    let userRoles = [...this.user.roles];

    // Populate otherRoles array
    let otherRoles = [];
    this.allRoles.forEach(role1 => {
      let found = false;

      this.user.roles.forEach(r => {
        if (r.id == role1.id) {
          found = true;
        }
      })

      if (!found) {
        otherRoles.push(role1);
      }
    });

    // Show Dialog
    const dialogRef = this.dialog.open(EditUserRolesDialogComponent, {
      width: '500px', data: { 
        userRoles: userRoles,
        otherRoles: otherRoles,
        user: this.user
      }
    });

    // Save Dialog Results
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.user.roles = userRoles.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        this.updateRolesRequest.emit(this.user);
      }

    }); 
  }
}
