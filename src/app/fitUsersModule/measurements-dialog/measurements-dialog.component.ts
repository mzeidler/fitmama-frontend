import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

@Component({
  selector: 'app-measurements-dialog',
  templateUrl: './measurements-dialog.component.html',
  styleUrls: ['./measurements-dialog.component.css'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS}, 
  ],
})
export class MeasurementsDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MeasurementsDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  fillLast() {
    this.data.meas.value1 = this.data.last.value1;
    this.data.meas.value2 = this.data.last.value2;
    this.data.meas.value3 = this.data.last.value3;
    this.data.meas.value4 = this.data.last.value4;
    this.data.meas.value5 = this.data.last.value5;
    this.data.meas.value6 = this.data.last.value6;
    this.data.meas.value7 = this.data.last.value7;
    this.data.meas.value8 = this.data.last.value8;
  }
  
}
