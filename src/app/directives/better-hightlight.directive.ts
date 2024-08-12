import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
    selector: '[appBetterHightlight]',
  standalone: true
})
export class BetterHightlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHightlight') highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor
  @HostListener('mouseenter') mouseover(eventData:Event){

    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue' );
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData:Event){
    this.backgroundColor = this.defaultColor
    ///this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent' )
  }


  constructor(private elRef: ElementRef, private renderer: Renderer2) {
    this.backgroundColor = this.defaultColor;
  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    //this.backgroundColor = "blue";
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue' )
  }

}
