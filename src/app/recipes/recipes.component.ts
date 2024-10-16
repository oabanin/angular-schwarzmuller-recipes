import {Component, EventEmitter, Output} from '@angular/core';
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {NgIf, NgStyle} from "@angular/common";
import {Recipe} from "./recipe.model";
import {RecipeService} from "./recipe.service";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [
    RecipeListComponent,
    RecipeDetailComponent,
    NgStyle,
    NgIf,
    RouterOutlet
  ],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers: [RecipeService]
})
export class RecipesComponent {
  recipeSelected: Recipe | null = null; // Initialize with null or an initial recipe

  constructor(private recipeService:RecipeService) {
    this.recipeService.recipeSelected.subscribe((recipe)=>{
      this.recipeSelected = recipe
    })

  }
}
