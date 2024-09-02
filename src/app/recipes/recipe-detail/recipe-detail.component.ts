import {Component, Input, OnInit} from '@angular/core';
import {NgStyle} from "@angular/common";
import {Recipe} from "../recipe.model";
import {DropdownDirective} from "../../shared/dropdown.directive";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [
    NgStyle,
    DropdownDirective
  ],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit {
  @Input('recipe') recipe: Recipe | null;

  constructor(private recipeService: RecipeService) {
    this.recipe = null;
  }

  ngOnInit() {
  }

  onAddToShoppingList() {
    if (!this.recipe?.ingredients) return;
    this.recipeService.addIngridientsToShoppingList(this.recipe.ingredients)
  }

}
