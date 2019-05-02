import { NgModule } from '@angular/core';
import { RouterModule, Route } from "@angular/router";
import { TodoEditorComponent } from '../todo-editor/todo-editor.component';

const routes: Route[] = [
  {
    path: "edit/:id", component: TodoEditorComponent
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
