import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edit-user-details-dialog',
  templateUrl: './edit-user-details-dialog.component.html',
  styleUrls: ['./edit-user-details-dialog.component.css']
})
export class EditUserDetailsDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditUserDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
