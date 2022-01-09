import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { take } from 'rxjs/operators';
import {
  UserService,
  userType,
  message,
  PreloaderComponent,
  ModalWinComponent
} from '../../../index'



@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})

export class EntryComponent implements OnInit {

  formEntery!: FormGroup;
  errMess: any = message;

  constructor(
    private fb: FormBuilder,
    private userservice: UserService
  ) { }
  @Output() entryClose = new EventEmitter();
  @Output() regOpen = new EventEmitter();

  ngOnInit(): void {

    this.formEntery = this.fb.group({
      "userName": ['', [Validators.required, Validators.minLength(4)]],
      "password": ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  submitEntForm(form: FormGroup) {

    if (form.valid) {
      this.userservice.userNamePassCheck(form).pipe(take(1)).subscribe(res => {
        if (res !== null) {
          res.userName === 'admin' ? this.userservice.shiftUserType(userType.admin) : this.userservice.shiftUserType(userType.user);
          this.userservice.setUser(res);
          form.reset();
          this.entryClose.emit()
        } else {
          form.get('password')?.setErrors({ passNameNone: true })
          form.get('userName')?.setErrors({ passNameNone: true })
          this.formEntery.valueChanges.pipe(take(1)).subscribe(res => {
            res && this.formEntery.get('password')?.getError('passNameNone') ?
              this.formEntery.get('password')?.setErrors(null) : null;
            res && this.formEntery.get('userName')?.getError('passNameNone') ?
              this.formEntery.get('userName')?.setErrors(null) : null
          })
        }
      })
    }
  }

  errMessage(form: FormGroup, fildName: string) {
    for (let err in form.get(fildName)?.errors) {
      return this.errMess[fildName][err];
    }
  }

  formCancel(form: FormGroup) {
    this.formEntery.reset();
    this.entryClose.emit();
  }

  registrationFormView() {
    this.formEntery.reset();
    this.regOpen.emit();
  }
}
