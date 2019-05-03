import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @Input('appHighlight') highlightColor: number;

  @HostListener('click') onMouseClick() {
    this.highlight(this.highlightColor || 700);
  }

  private highlight(weight: number) {
    this.el.nativeElement.style.fontWeight = weight;
  }
}
