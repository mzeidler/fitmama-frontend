import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delete-training-dialog',
  templateUrl: './delete-training-dialog.component.html',
  styleUrls: ['./delete-training-dialog.component.css']
})
export class DeleteTrainingDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteTrainingDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
