import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
@Injectable()
export class RecipeService{
    recipesChanged = new Subject<Recipe[]>();
    //recipeSelected = new EventEmitter<Recipe>();
    recipes: Recipe[] = [
        new Recipe('A Test Recipe', 
        'This is simply a test', 
        'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
        [new Ingredient('meat',1) ,new Ingredient('beef',1)]
        
        ),
        new Recipe('A Test values',
         'This is simply a test',
          'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
          [new Ingredient('buns',1),new Ingredient('meat',20)]
         
          )
      ]; 
  recipeSelected: any;
      constructor(private slService: ShoppingListService){
        
      }
      getRecipes(){
          return this.recipes.slice();
      }
      getRecipe(index: number){

        return this.recipes[index];
    }
      addIngredientsToShoppingList(ingredients : Ingredient[]){
            this.slService.addIngredients(ingredients);
      }
      addRecipe(recipe: Recipe)
      {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }
      updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }
      deleteRecipe(index: number){
          this.recipes.splice(index, 1)
          this.recipesChanged.next(this.recipes.slice());
      }
}