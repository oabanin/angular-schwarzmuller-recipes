import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {Recipe} from "../../recipe.model";
import {RecipeService} from "../../recipe.service";

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
  @Input('recipe') recipe!: Recipe;
  // @Output() recipeSelected = new EventEmitter<void>()

  constructor(private recipeService: RecipeService) {
    // this.recipe = null;
  }

   onSelected(){
    this.recipeService.recipeSelected.emit(this.recipe)
    // this.recipeSelected.emit();
   }
}
