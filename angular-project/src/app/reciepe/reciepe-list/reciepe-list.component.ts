import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Recipe } from '../reciepe.model';

@Component({
  selector: 'app-reciepe-list',
  templateUrl: './reciepe-list.component.html',
  styleUrls: ['./reciepe-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReciepeListComponent implements OnInit {
  recipeList:Recipe[]=[
    new Recipe('test recipe','this is test recipe','http://currytadka.in/wp-content/uploads/2016/01/MIX-VEG.jpg'),
    new Recipe('test recipe','this is test recipe','http://currytadka.in/wp-content/uploads/2016/01/MIX-VEG.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  

}
