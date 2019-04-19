import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edit-menu-users-dialog',
  templateUrl: './edit-menu-users-dialog.component.html',
  styleUrls: ['./edit-menu-users-dialog.component.css']
})
export class EditMenuUsersDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditMenuUsersDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
