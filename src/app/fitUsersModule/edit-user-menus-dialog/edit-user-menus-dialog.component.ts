import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Menu } from 'src/app/model/menu';

@Component({
  selector: 'app-edit-user-menus-dialog',
  templateUrl: './edit-user-menus-dialog.component.html',
  styleUrls: ['./edit-user-menus-dialog.component.css']
})
export class EditUserMenusDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditUserMenusDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  drop(event: CdkDragDrop<Menu[]>) {
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
