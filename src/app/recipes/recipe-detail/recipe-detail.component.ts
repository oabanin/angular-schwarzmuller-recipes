import {Component, Input} from '@angular/core';
import {NgStyle} from "@angular/common";
import {Recipe} from "../recipe.model";
import {reduce} from "rxjs";
import {DropdownDirective} from "../../shared/dropdown.directive";

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
export class RecipeDetailComponent {
  @Input('recipe') recipe: Recipe | null;
constructor( ) {
  this.recipe = null;
}

}
