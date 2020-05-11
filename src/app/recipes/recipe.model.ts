import { Ingredient } from './../shared/ingredient.model';
export class Recipe {
  description: string;
    constructor(public name: string,public desc: string,public imagePath: string,public ingredients:Ingredient[]){
       }
}