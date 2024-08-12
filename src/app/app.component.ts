import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgbInputDatepicker, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {HeaderComponent} from "./header/header.component";
import {NgIf} from "@angular/common";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgbInputDatepicker, RecipesComponent, ShoppingListComponent, HeaderComponent, NgIf, RecipeDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-shwarzmuller2';
  loadedFeature = 'recipe'
  constructor(private modalService: NgbModal) {
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  onNavigate(feature:string){
    this.loadedFeature = feature;
  }
}
