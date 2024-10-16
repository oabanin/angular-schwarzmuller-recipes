import {Component, Input, OnInit} from '@angular/core';
import {NgStyle} from "@angular/common";
import {Recipe} from "../recipe.model";
import {DropdownDirective} from "../../shared/dropdown.directive";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [
    NgStyle,
    DropdownDirective,
    RouterLink
  ],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit {
  // @Input('recipe') recipe: Recipe | null;
  recipe: Recipe | undefined;
  id!: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) {
    // this.recipe = null;
  }

  ngOnInit() {

    // const id: string = this.route.snapshot.params['id'];
    // if (id) {
    //   this.recipe = this.recipeService.getRecipe(+id);
    // }

    this.route.params.subscribe(params => {
      const id: string = params['id'];
      if (id) {
        this.id = +id;
        this.recipe = this.recipeService.getRecipe(+id);
      }
    })

  }

  onAddToShoppingList() {
    if (!this.recipe?.ingredients) return;
    this.recipeService.addIngridientsToShoppingList(this.recipe.ingredients)
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
