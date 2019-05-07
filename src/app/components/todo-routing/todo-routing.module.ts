import { NgModule } from '@angular/core';
import { RouterModule, Route } from "@angular/router";
import { TodoEditorComponent } from '../todo-editor/todo-editor.component';
import { TodolistComponent } from '../todolist/todolist.component';
import { TodoDeleteComponent } from '../todo-delete/todo-delete.component';

const routes: Route[] = [
  {
    path: "", component: TodolistComponent
  },
  {
    path: "edit/:id", component: TodoEditorComponent
  },
  {
    path: "delete/:id", component: TodoDeleteComponent
  }
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class TodoRoutingModule { }
