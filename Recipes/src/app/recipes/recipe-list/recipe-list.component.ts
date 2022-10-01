import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Chicken with pomegranate molasses", "wow what a terrible comibination of flavours!", "https://www.goodfood.com.au/content/dam/images/h/2/6/r/y/7/image.related.wideLandscape.940x529.h26u9c.png/1664508421879.jpg"),
    new Recipe("Chicken with pomegranate molasses", "wow what a terrible comibination of flavours!", "https://www.goodfood.com.au/content/dam/images/h/2/6/r/y/7/image.related.wideLandscape.940x529.h26u9c.png/1664508421879.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
