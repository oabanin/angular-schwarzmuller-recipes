import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Ingredient} from "../../shared/ingredient.model";
import {BasicHighlightDirective} from "../../directives/basic-highlight.directive";
import {BetterHightlightDirective} from "../../directives/better-hightlight.directive";

@Component({
  selector: 'app-shopping-edit',
  standalone: true,
  imports: [
    FormsModule,
    BasicHighlightDirective,
    BetterHightlightDirective
  ],
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', {static:false})
  private elChildOne: ElementRef | null;

  @ViewChild('amountInput', {static:false})
  private amountInput: ElementRef | null;
  @Output() added = new EventEmitter<Ingredient>()

  constructor() {
    this.elChildOne = null;
    this.amountInput = null;
  }

  onSubmit(name:string, amount:string){
    console.log(this.elChildOne?.nativeElement.value, this.amountInput?.nativeElement.value);
    console.log(name, amount);
    this.added.emit(new Ingredient(name, +amount))
  }
}
