import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { TodolistComponent } from './components/todolist/todolist.component';
import { TodoEntityComponent } from './components/todo-entity/todo-entity.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodoEntityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
