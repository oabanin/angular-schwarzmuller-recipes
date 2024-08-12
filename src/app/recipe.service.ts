import {Recipe} from "./recipes/recipe.model";

export  class RecipeService {
  private   recipes: Recipe[] = [new Recipe('Recipe #1', 'Description of Recipe #1. Ingredients ETC', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1024px-WordPress_blue_logo.svg.png')]

  getRecipes(){
    return this.recipes.slice()
  }
}
