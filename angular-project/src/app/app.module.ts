import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component'
import {ReciepeComponent} from './reciepe/reciepe.component';

import { ReciepeListComponent } from './reciepe/reciepe-list/reciepe-list.component';
import { ReciepeDetailsComponent } from './reciepe/reciepe-details/reciepe-details.component';
import { ReciepeItemComponent } from './reciepe/reciepe-details/reciepe-item/reciepe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReciepeComponent,
    ReciepeListComponent,
    ReciepeDetailsComponent,
    ReciepeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
