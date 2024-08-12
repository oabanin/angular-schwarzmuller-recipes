import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appHighlight]',
})
export class BasicHighlightDirective implements OnInit{
  constructor(private el: ElementRef) {

  }

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
}
