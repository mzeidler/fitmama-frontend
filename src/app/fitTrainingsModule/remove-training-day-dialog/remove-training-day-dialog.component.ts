import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-remove-training-day-dialog',
  templateUrl: './remove-training-day-dialog.component.html',
  styleUrls: ['./remove-training-day-dialog.component.css']
})
export class RemoveTrainingDayDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RemoveTrainingDayDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
