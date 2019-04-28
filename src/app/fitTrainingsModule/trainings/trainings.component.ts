import { Component, OnInit } from '@angular/core';
import { TrainingsService } from 'src/app/services/trainings.service';
import { Training } from 'src/app/model/training';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AddTrainingDialogComponent } from '../add-training-dialog/add-training-dialog.component';
import { User } from 'src/app/model/user';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {

  trainings: Training[];
  users: User[];
  name: string;

  constructor(private trainingsService: TrainingsService, private userService: UsersService, public dialog: MatDialog, private route: ActivatedRoute) { }

  ngOnInit() {
    this.users = this.route.snapshot.data['users'].users;
    this.trainings = this.route.snapshot.data['trainings'];
  }

  getTrainings(): void {
    this.trainingsService.getTrainings().subscribe(trainings => this.trainings = trainings);
    this.userService.getUsersShort().subscribe(users => this.users = users.users); 
  }

  addTraining(): void {
    this.name = undefined;

    const dialogRef = this.dialog.open(AddTrainingDialogComponent, {
      width: '350px', data: { 
        title: 'Dodavanje novog treninga', 
        placeholder: 'Ime',
        name: this.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.name = result;

      if (this.name) {
        let newTraining = new Training();
        newTraining.name = this.name;
        newTraining.trainingDays = [];
        newTraining.users = [];

        this.trainingsService.addTraining(newTraining)
        .subscribe(training => {
          this.trainings.push(training);
        });
      }
    });
  }

  updateTraining(training: Training) {
      this.trainingsService.updateTraining(training).subscribe();
  }
  
  deleteTraining(training: Training) {
      this.trainingsService.deleteTraining(training);
      this.trainings = this.trainings.filter(m => m.id != training.id);
  }

  updateTrainingUsers(training: Training) {
    this.trainingsService.updateUsers(training).subscribe();
  }

}
