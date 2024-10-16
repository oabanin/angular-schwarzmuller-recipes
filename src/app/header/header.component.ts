import {Component, EventEmitter, Output} from '@angular/core';
import {NgStyle} from "@angular/common";
import {DropdownDirective} from "../shared/dropdown.directive";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgStyle,
    DropdownDirective,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // @Output() featureSelected = new EventEmitter<string>();
  // onSelect(feature:string){
  //   this.featureSelected.emit(feature)
  // }
}
