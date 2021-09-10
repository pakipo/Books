import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { UserService, User } from "../../../index";
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

export function passNameCheck(this: UserService, control: AbstractControl) {
 
  return this.getUsers().pipe(map(res => {
    let user = res as User[];
    let err: boolean = false;
    user.forEach((user: User): any => {
      if (user.userName === control.value || control.value === 'admin') {
       err = true
      }})
 return  err ? { nameErr: true }:null  
 })) 
}     
