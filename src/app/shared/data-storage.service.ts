import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';

@Injectable()
export class DataStorageService{
constructor(private http: HttpClient, private recipeService: RecipeService){}
storeRecipes(){
   return this.http.put('https://console.firebase.google.com/project/ng-recipe-book-de1d6/database/firestore/data~2F/recipes.json', this.recipeService.getRecipes());
}
}