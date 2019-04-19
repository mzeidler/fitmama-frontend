import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delete-menu-dialog',
  templateUrl: './delete-menu-dialog.component.html',
  styleUrls: ['./delete-menu-dialog.component.css']
})
export class DeleteMenuDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteMenuDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
