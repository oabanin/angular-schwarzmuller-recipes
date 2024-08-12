import {Component, EventEmitter, Output} from '@angular/core';
import {RecipeItemComponent} from "./recipe-item/recipe-item.component";
import {Recipe} from "../recipe.model";
import {NgForOf, NgOptimizedImage, NgStyle, CommonModule} from "@angular/common";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [
    RecipeItemComponent,
    NgForOf,
    NgOptimizedImage,
    NgStyle,
    CommonModule
  ],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = new RecipeService().getRecipes()

  constructor(private recipeService:RecipeService) {

  }

  ngOnInit(){
    this.recipes = this.recipeService.getRecipes()
  }
}
