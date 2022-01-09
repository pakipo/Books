import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[hoverCard]'
})
export class HoverCard {
 
  constructor(private element: ElementRef,
  ) {}
   
  
  @HostListener('mouseover', ['$event'])
  mouseover(e: any) {
    this.element.nativeElement.style = "box-shadow: 0 0 25px  #3ceff5;cursor: pointer;"
  }


  @HostListener('mouseout', ['$event'])
  mouseout(e: any) {
    this.element.nativeElement.style = ""
  }
}
