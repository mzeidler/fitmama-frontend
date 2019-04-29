import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Role } from 'src/app/model/role';

@Component({
  selector: 'app-edit-user-roles-dialog',
  templateUrl: './edit-user-roles-dialog.component.html',
  styleUrls: ['./edit-user-roles-dialog.component.css']
})
export class EditUserRolesDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditUserRolesDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  drop(event: CdkDragDrop<Role[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
