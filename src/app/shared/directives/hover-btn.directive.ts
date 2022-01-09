import { Directive, ElementRef, HostListener, Input,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverBtn]'
})
export class HoverBtnDirective {
  firstColor!: string;
  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
  ) { }
  @Input() color!: string;
 
  
  @HostListener('mouseover', ['$event'])
  mouseover(e: any) {
     this.firstColor = getComputedStyle(this.element.nativeElement).color
    this.renderer.setAttribute(this.element.nativeElement, 'style', 'color:' + this.color);
  }

  @HostListener('mouseout', ['$event'])
  mouseout(e: any) {
    this.renderer.setAttribute(this.element.nativeElement, 'style', 'color:' + this.firstColor);
   
  }
}
