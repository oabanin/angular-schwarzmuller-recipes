import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {Recipe} from "../../recipe.model";

@Component({
  selector: 'app-recipe-item',
  standalone: true,
    imports: [
        NgForOf,
        NgOptimizedImage
    ],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  @Input('recipe') recipe: Recipe | null;
  @Output() recipeSelected = new EventEmitter<void>()

  constructor() {
    this.recipe = null;
  }

   onSelected(){
    this.recipeSelected.emit();
   }
}
