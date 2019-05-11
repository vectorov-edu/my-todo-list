import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-modal-confirmation',
  templateUrl: './modal-confirmation.component.html',
  styleUrls: ['./modal-confirmation.component.css']
})
export class ModalConfirmationComponent{

  constructor(
    private dialogRef: MatDialogRef<ModalConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    }

  public onCancelClick(): void {
    this.dialogRef.close(false);
  }

  public onOkClick(): void {
    this.dialogRef.close(true);
  }
}

