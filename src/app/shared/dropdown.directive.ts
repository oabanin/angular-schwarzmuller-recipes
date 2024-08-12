import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  standalone: true
})
export class DropdownDirective {
  isOpen: boolean = false;
  @Input('appDropdown') className!: string;
  @Input() targetElementId!: string; // Id of the target element

  constructor(private elementRef: ElementRef) {
  }

  // @HostListener('click') onClick() {
  //   if (this.className && this.targetElementId) {
  //     const targetElement = document.getElementById(this.targetElementId);
  //     if (targetElement) {
  //       targetElement.classList.toggle(this.className);
  //     }
  //   }
  // }

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    // this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    if (!this.className || !this.targetElementId) return;
    const targetElement = document.getElementById(this.targetElementId);
    if (!targetElement) return;

    if (this.isOpen) {
      targetElement.classList.remove(this.className)
      this.isOpen = false;
      return;
    }
    if(this.elementRef.nativeElement.contains(event.target)){
      targetElement.classList.add(this.className)
      this.isOpen = true;
    }

  }


}
