import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-menu-day-dialog',
  templateUrl: './add-menu-day-dialog.component.html',
  styleUrls: ['./add-menu-day-dialog.component.css']
})
export class AddMenuDayDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddMenuDayDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
