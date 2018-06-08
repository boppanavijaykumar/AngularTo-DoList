import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AddTodoListComponent } from './add-todo-list/add-todo-list.component';
import { ViewTodoListComponent } from './view-todo-list/view-todo-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AddTodoListComponent,
    AddTodoListComponent,
    ViewTodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
