import { AbstractControl } from "@angular/forms";

export function Validatepassword(control: AbstractControl) {
  return control.get('password')?.value !== control.get('passwordCheck')?.value ? { passErr: true }: null;
  
}
