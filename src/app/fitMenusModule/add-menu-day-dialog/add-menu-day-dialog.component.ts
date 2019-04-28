import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

@Component({
  selector: 'app-add-menu-day-dialog',
  templateUrl: './add-menu-day-dialog.component.html',
  styleUrls: ['./add-menu-day-dialog.component.css']
})
export class AddMenuDayDialogComponent implements OnInit {

  public Editor = DecoupledEditor;

  constructor(public dialogRef: MatDialogRef<AddMenuDayDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public onReady(editor) {
    editor.ui.getEditableElement().parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
    );
  }
}
