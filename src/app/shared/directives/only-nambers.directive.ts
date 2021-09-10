// ввод только чисел.

import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[OnlyNambers]'
})
export class OnlyNambersDirective {
 
  constructor(private field: ElementRef) { }

  velue: any;

  @HostListener('keydown', ['$event']) keyPress(e: any) {
   
    if (!isNaN(e.key)) { return }

    if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
      // Ctrl+A
      (e.keyCode == 65 && e.ctrlKey === true) ||
      //  Ctrl+C
      (e.keyCode == 67 && e.ctrlKey === true) ||
      //  Ctrl+V
      (e.keyCode == 86 && e.ctrlKey === true) ||
      //  Ctrl+X
      (e.keyCode == 88 && e.ctrlKey === true) ||
      // home, end, left, right
      (e.keyCode >= 35 && e.keyCode <= 39) ||
      // +
      (e.keyCode == 187 && e.shiftKey === true && this.field.nativeElement.value === ''))
      {
      return;
    } else { return e.preventDefault(); }
  }

 
}
