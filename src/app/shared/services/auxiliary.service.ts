import { Injectable } from '@angular/core';
import {Subject } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {
  ModalWinComponent,
  ModalWinObj} from '../../index';

import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuxiliaryService {

  preloaderToggle: boolean = false;
  preloaderToggleSubj = new Subject();
  constructor(
    private dialog: MatDialog
  ) { }

  preloaderCtrl(mode: boolean) {
    this.preloaderToggle = mode;
    this.preloaderToggleSubj.next(this.preloaderToggle)
  }
  openDialog(modalWindata: ModalWinObj) {
    const modalWin = new MatDialogConfig();
    modalWin.disableClose = true;
    modalWin.closeOnNavigation = false;
    modalWin.hasBackdrop = true;
    modalWin.data = modalWindata;
    const modalRef = this.dialog.open(ModalWinComponent, modalWin);
    return modalRef.afterClosed().pipe(
      map(data => { return data })
    );
  }
}

