import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

@Component({
  selector: 'app-add-training-day-dialog',
  templateUrl: './add-training-day-dialog.component.html',
  styleUrls: ['./add-training-day-dialog.component.css']
})
export class AddTrainingDayDialogComponent implements OnInit {

  public Editor = DecoupledEditor;

  constructor(public dialogRef: MatDialogRef<AddTrainingDayDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public onReady(editor) {

    editor.editing.view.change( writer => {
      writer.setAttribute( 'spellcheck', 'false', editor.editing.view.document.getRoot() );
    } );

    editor.ui.getEditableElement().parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
    );
  }
}
