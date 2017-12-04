import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Ingredient} from '../shared/shared.component'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShoppingListComponent implements OnInit {
 Ingredients:Ingredient[]= [
new Ingredient('Apple',5),
new Ingredient('Tomatos',10)
 ];
  constructor() { }

  ngOnInit() {
  }

}
