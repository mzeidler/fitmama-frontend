import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Training } from 'src/app/model/training';

@Component({
  selector: 'app-edit-user-trainings-dialog',
  templateUrl: './edit-user-trainings-dialog.component.html',
  styleUrls: ['./edit-user-trainings-dialog.component.css']
})
export class EditUserTrainingsDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditUserTrainingsDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

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
