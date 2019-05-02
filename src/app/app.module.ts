import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { TodolistComponent } from './components/todolist/todolist.component';
import { TodoEntityComponent } from './components/todo-entity/todo-entity.component';
import { TodoEditorComponent } from './components/todo-editor/todo-editor.component';
import { TodoRoutingModule } from './components/todo-routing/todo-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodoEntityComponent,
    TodoEditorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TodoRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
