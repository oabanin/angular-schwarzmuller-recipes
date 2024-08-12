import {Component, EventEmitter, Output} from '@angular/core';
import {RecipeItemComponent} from "./recipe-item/recipe-item.component";
import {Recipe} from "../recipe.model";
import {NgForOf, NgOptimizedImage, NgStyle} from "@angular/common";

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [
    RecipeItemComponent,
    NgForOf,
    NgOptimizedImage,
    NgStyle
  ],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [new Recipe('Recipe #1', 'Description of Recipe #1. Ingredients ETC', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1024px-WordPress_blue_logo.svg.png')]
  @Output() recipeSelected = new EventEmitter<Recipe>()
  onRecipeSelected(recipe:Recipe){
    this.recipeSelected.emit(recipe);
  }
}
