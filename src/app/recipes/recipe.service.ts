import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

//ADD to inject service into a service
@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>()
  private recipes: Recipe[] = [new Recipe(
    'Recipe #1',
    'Description of Recipe #1. Ingredients ETC',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1024px-WordPress_blue_logo.svg.png',
    [new Ingredient('Parrot', 1)]
  )]

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice()
  }

  addIngridientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngridients(ingredients)
  }
}
