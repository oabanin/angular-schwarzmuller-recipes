import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

//ADD to inject service into a service
@Injectable({providedIn: 'root'})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>()
  private recipes: Recipe[] =
    [
      new Recipe(
        'Recipe #1',
        'Description of Recipe #1. Ingredients ETC',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1024px-WordPress_blue_logo.svg.png',
        [new Ingredient('Parrot', 1)]
      ),
      new Recipe(
        'Recipe #2',
        'ololoololl',
        'https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg',
        [new Ingredient('Plate', 1)]
      )
    ]

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice()
  }

  getRecipe(id: number) {
    return this.recipes[id]
  }

  addIngridientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngridients(ingredients)
  }
}
