import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-delete-measurement-dialog',
  templateUrl: './delete-measurement-dialog.component.html',
  styleUrls: ['./delete-measurement-dialog.component.css']
})
export class DeleteMeasurementDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteMeasurementDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
