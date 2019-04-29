import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Menu } from 'src/app/model/menu';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AddMenuDialogComponent } from '../add-menu-dialog/add-menu-dialog.component';
import { DeleteMenuDialogComponent } from '../delete-menu-dialog/delete-menu-dialog.component';
import { EditMenuUsersDialogComponent } from '../edit-menu-users-dialog/edit-menu-users-dialog.component';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit {

  @Input()
  menu: Menu;

  @Input()
  users: User[];
  
  name: string;

  @Output() 
  deleteRequest = new EventEmitter<Menu>();

  @Output() 
  updateRequest = new EventEmitter<Menu>();

  @Output() 
  updateUsersRequest = new EventEmitter<Menu>();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  editMenu() {
    this.name = this.menu.name;

    const dialogRef = this.dialog.open(AddMenuDialogComponent, {
      width: '350px', data: { 
        title: 'Uredi meni', 
        placeholder: 'Ime',
        name: this.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.name = result;

      if (this.name) {
        this.menu.name = this.name;
        this.updateRequest.emit(this.menu);
      }
    });    
  }

  deleteMenu() {

    const dialogRef = this.dialog.open(DeleteMenuDialogComponent, {
      width: '430px', data: { 
        title: 'Obriši meni', 
        menu: this.menu}
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        this.deleteRequest.emit(this.menu);  
      }

    }); 
  }

  editUsers() {
    
    if (!this.menu.users) {
      this.menu.users = [];
    }

    // Populate menuUsers array
    let menuUsers = [];
    this.menu.users.forEach(user => {
      menuUsers.push(user);
    });

    // Populate otherUsers array
    let otherUsers = [];
    this.users.forEach(user1 => {
      let found = false;
      this.menu.users.forEach(menuUser => {
        if (menuUser.id == user1.id) {
          found = true;
        }
      })

      if (!found) {
        otherUsers.push(user1);
      }
    });

    // Show Dialog
    const dialogRef = this.dialog.open(EditMenuUsersDialogComponent, {
      width: '500px', data: { 
        menuUsers: menuUsers,
        otherUsers: otherUsers
      }
    });

    // Save Dialog Results
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.menu.users = menuUsers;
        this.updateUsersRequest.emit(this.menu);
      }

    }); 
  }


}
