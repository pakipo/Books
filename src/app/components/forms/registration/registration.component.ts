import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { take } from 'rxjs/operators';
import {
  UserService,
  userType,
  User,
  message,
  countries,
  passNameCheck,
  ValidateNum,
  PreloaderComponent,
  ModalWinComponent
} from '../../../index'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  formRegistration!: FormGroup;
  disabled: boolean = true;
  errMess: any = message;
  countries = countries;
  phoneControl: any;
  passwordHide: boolean = true;
  passwordCheckHide: boolean = true;

  constructor(
    private fb: FormBuilder,
    private userservice: UserService

  ) { }

  @Output() regClose = new EventEmitter();
 

  ngOnInit(): void {

    this.formRegistration = this.fb.group({
      "userName": ['', [Validators.required, Validators.minLength(4)], passNameCheck.bind(this.userservice)],
      "email": ['', [Validators.required, Validators.email]],
      "country": ['BLR'],
      "phone": ['+375', [ValidateNum, Validators.maxLength(13)]],
      "password": ['', [Validators.required, Validators.minLength(6)]],
      "passwordCheck": ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  errMessage(form: FormGroup, fildName: string) {
    for (let err in form.get(fildName)?.errors) {
      return this.errMess[fildName][err];
    }
  }

  submitRegForm(form: FormGroup): void {
    if (form.get('password')?.value !== form.get('passwordCheck')?.value) {
      form.get('passwordCheck')?.setErrors({ passErr: true });
      form.get('password')?.setErrors({ passErr: true });
      return;
    }
    if (form.valid) {
      let phone: Array<string> = [];
      form.get("phone")?.value.length >= 11 ? phone.push(form.get("phone")?.value) : phone.push('');
      this.userservice.createUser(
        new User(
          form.get("userName")!.value,
          form.get("password")?.value,
          form.get("email")?.value,
          null,
          phone,
          null,
          null));
      this.regClose.emit();
    } else {
      this.userservice.formTouched(form);
    }
  }
  formCancel() {
    this.regClose.emit();}
}
