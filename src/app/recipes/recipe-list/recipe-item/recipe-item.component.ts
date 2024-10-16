import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {Recipe} from "../../recipe.model";
import {RecipeService} from "../../recipe.service";
import {ActivatedRoute, Router, RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-recipe-item',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent implements OnInit {
  @Input('recipe') recipe!: Recipe;
  @Input() index!: number;

  // @Output() recipeSelected = new EventEmitter<void>()

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) {
    // this.recipe = null;
  }

  ngOnInit() {
    console.log(this.recipe);
  }


  // onSelected() {
  //   this.router.navigate([this.recipe.id], {relativeTo: this.route});
  //
  //   //this.recipeService.recipeSelected.emit(this.recipe)
  //   // this.recipeSelected.emit();
  // }
}
