import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";
import {Subject} from "rxjs";

export class ShoppingListService {
  //ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredientsChanged = new Subject<Ingredient[]>();
  private   ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient("tomatoes", 10)
  ];

  public getIngredients(){
    return this.ingredients.slice()
  }

  public add(name:string, amount:string){
    console.log(this.getIngredients())
    this.ingredients.push( new Ingredient(name, +amount));
    this.ingredientsChanged.next(this.ingredients.slice());

  }

  public addIngridients(ingridients:Ingredient[]){
    // for(let ingridient of ingridients){
    //   this.add(ingridient.name, ingridient.amount.toString());
    // }

    this.ingredients.push(...ingridients)
  }
}
