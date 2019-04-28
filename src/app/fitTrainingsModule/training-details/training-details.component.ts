import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Training } from 'src/app/model/training';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AddTrainingDialogComponent } from '../add-training-dialog/add-training-dialog.component';
import { DeleteTrainingDialogComponent } from '../delete-training-dialog/delete-training-dialog.component';
import { EditTrainingUsersDialogComponent } from '../edit-training-users-dialog/edit-training-users-dialog.component';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.css']
})
export class TrainingDetailsComponent implements OnInit {

  @Input()
  training: Training;

  @Input()
  users: User[];
  
  name: string;

  @Output() 
  deleteRequest = new EventEmitter<Training>();

  @Output() 
  updateRequest = new EventEmitter<Training>();

  @Output() 
  updateUsersRequest = new EventEmitter<Training>();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  editTraining() {
    this.name = this.training.name;

    const dialogRef = this.dialog.open(AddTrainingDialogComponent, {
      width: '350px', data: { 
        title: 'Uredi trening', 
        placeholder: 'Ime',
        name: this.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.name = result;

      if (this.name) {
        this.training.name = this.name;
        this.updateRequest.emit(this.training);
      }
    });    
  }

  deleteTraining() {

    const dialogRef = this.dialog.open(DeleteTrainingDialogComponent, {
      width: '430px', data: { 
        title: 'Obriši trening', 
        training: this.training}
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        this.deleteRequest.emit(this.training);  
      }

    }); 
  }

  editUsers() {
    
    if (!this.training.users) {
      this.training.users = [];
    }

    let trainingUsers = [];

    this.training.users.forEach(user => {
      trainingUsers.push(user);
    });

    let otherUsers = [];

    this.users.forEach(user1 => {

      let found = false;
      this.training.users.forEach(trainingUser => {
        if (trainingUser.id == user1.id) {
          found = true;
        }
      })

      if (!found) {
        otherUsers.push(user1);
      }

    });

    const dialogRef = this.dialog.open(EditTrainingUsersDialogComponent, {
      width: '500px', data: { 
        trainingUsers: trainingUsers,
        otherUsers: otherUsers
      }
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        this.training.users = trainingUsers;
        this.updateUsersRequest.emit(this.training);
      }

    }); 
  }


}
