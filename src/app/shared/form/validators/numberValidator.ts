import { AbstractControl } from "@angular/forms";

export function ValidateNum(control: AbstractControl) {
  if (control.value) {
  if (control.value[0] === "+" || control.value[0] === "8") {
    for (let i = 1; i < control.value.length; i++) {
     
      if (isNaN(control.value[i])) return { notNumber: true } }
  } else {
    return { notNumber: true }
  }}
  return null;
}
