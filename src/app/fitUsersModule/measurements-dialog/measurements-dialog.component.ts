import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-measurements-dialog',
  templateUrl: './measurements-dialog.component.html',
  styleUrls: ['./measurements-dialog.component.css']
})
export class MeasurementsDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MeasurementsDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
}
