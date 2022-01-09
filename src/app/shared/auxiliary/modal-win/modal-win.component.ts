import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { ModalWinObj } from "../../../index"
@Component({
  selector: 'app-modal-win',
  templateUrl: './modal-win.component.html',
  styleUrls: ['./modal-win.component.scss']
})




export class ModalWinComponent implements OnInit {


  constructor(
    private dialogRef: MatDialogRef<ModalWinComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalWinObj
  ) {

  }

  ngOnInit(): void {
  }
  cancel() {
    this.dialogRef.close({ answer: false });
  }

  out() {
    this.dialogRef.close({ answer: true });
  }
}
