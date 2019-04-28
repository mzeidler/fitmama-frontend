import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Training } from 'src/app/model/training';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-edit-training-users-dialog',
  templateUrl: './edit-training-users-dialog.component.html',
  styleUrls: ['./edit-training-users-dialog.component.css']
})
export class EditTrainingUsersDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditTrainingUsersDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  drop(event: CdkDragDrop<Training[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
