import {Component, OnInit, SimpleChanges} from '@angular/core';
import {ShoppingEditComponent} from "./shopping-edit/shopping-edit.component";
import {Ingredient} from "../shared/ingredient.model";
import {NgFor} from "@angular/common";
import {ShoppingListService} from "./shopping-list.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [
    ShoppingEditComponent,
     NgFor
  ],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  private subscription!: Subscription;

  constructor(private shoppingListService:ShoppingListService) {
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientsChanged.subscribe((data)=>{
      this.ingredients = data;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



}
