import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { User } from '../../model/user';
import { Menu } from 'src/app/model/menu';
import { Training } from 'src/app/model/training';
import { Role } from 'src/app/model/role';
import { MatDialog } from '@angular/material';
import { EditUserRolesDialogComponent } from '../edit-user-roles-dialog/edit-user-roles-dialog.component';
import { EditUserMenusDialogComponent } from '../edit-user-menus-dialog/edit-user-menus-dialog.component';
import { EditUserTrainingsDialogComponent } from '../edit-user-trainings-dialog/edit-user-trainings-dialog.component';
import { DeleteUserDialogComponent } from '../delete-user-dialog/delete-user-dialog.component';
import { EditUserDetailsDialogComponent } from '../edit-user-details-dialog/edit-user-details-dialog.component';
import { MeasurementListComponent } from '../measurement-list/measurement-list.component';

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
  deleteRequest = new EventEmitter<User>();

  @Output() 
  updateRequest = new EventEmitter<User>();

  @Output() 
  updateMenusRequest = new EventEmitter<User>();

  @Output() 
  updateTrainingsRequest = new EventEmitter<User>();

  @Output() 
  updateRolesRequest = new EventEmitter<User>();

  @ViewChild(MeasurementListComponent)
  measurementListComponent: MeasurementListComponent;
  
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  load() {
    this.measurementListComponent.load();
  }

  editUser() {

    // Show Dialog
    const dialogRef = this.dialog.open(EditUserDetailsDialogComponent, {
      width: '650px', data: { 
        add: false,
        myfit: false,
        user: {...this.user},
      }
    });

    // Save Dialog Results
    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        this.user.username = result.user.username;
        this.user.firstName = result.user.firstName;
        this.user.lastName = result.user.lastName;
        this.user.gender = result.user.gender;
        this.user.address = result.user.address;
        this.user.city = result.user.city;
        this.user.zipcode = result.user.zipcode;
        this.user.mobile = result.user.mobile;
        this.user.email = result.user.email;
        this.user.birthDate = result.user.birthDate;
        this.user.height = result.user.height;                    
        this.user.name = this.getName(this.user);
        this.user.password = result.user.password;
        this.updateRequest.emit(this.user);
      }

    }); 

  }

  deleteUser() {

    const dialogRef = this.dialog.open(DeleteUserDialogComponent, {
      width: '430px', data: { 
        title: 'Obriši korisnicu', 
        user: this.user}
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        this.deleteRequest.emit(this.user);  
      }

    }); 
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

  public getName(user: User): string {

    let name = '';

    if (user.firstName) {
      name = user.firstName + " ";
    }

    if (user.lastName) {
      name = name + user.lastName;
    }

    if (name.length == 0 && user.username) {
      name = user.username;
    }

    if (name.length == 0) {
      name = "User id=" + user.id;
    }

    return name;
  }
}
