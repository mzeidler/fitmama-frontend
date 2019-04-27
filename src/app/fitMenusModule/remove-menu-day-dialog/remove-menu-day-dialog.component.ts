import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-remove-menu-day-dialog',
  templateUrl: './remove-menu-day-dialog.component.html',
  styleUrls: ['./remove-menu-day-dialog.component.css']
})
export class RemoveMenuDayDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RemoveMenuDayDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
