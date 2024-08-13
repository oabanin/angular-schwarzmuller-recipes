import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private   ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient("tomatoes", 10)
  ];

  getIngredients(){
    return this.ingredients.slice()
  }

  add(name:string, amount:string){
    console.log(this.getIngredients())
    this.ingredients.push( new Ingredient(name, +amount));
    this.ingredientsChanged.emit(this.ingredients.slice());

  }
}
