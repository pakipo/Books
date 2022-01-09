import { AbstractControl } from "@angular/forms";

export function PageCountCheck(control: AbstractControl) {
  
  if (
    control.value <= 0
  ) return { pageCountNum:true}
  return null;
}

