import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';
import { TodoModel } from 'src/models/todo.model';

@Component({
  selector: 'app-todo-editor',
  templateUrl: './todo-editor.component.html',
  styleUrls: ['./todo-editor.component.css']
})
export class TodoEditorComponent implements OnInit {
  public todo: TodoModel = new TodoModel(0, "", "", "", "");

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private todoService: TodoService
  ) { }

  ngOnInit() {
    //debugger;
    console.log(this.activatedRoute);
    this.activatedRoute.paramMap.subscribe(
      params => {
        this.todoService.getTodoBy(params.get('id')).subscribe((todo: TodoModel) => {
            this.todo = todo;
          }
        );
      }
    );
  }

  public apply() {
    this.updateDates();

    this.todoService
      .updateTodo(this.todo)
      .subscribe(
        (todo) => {
          debugger;
          this.router.navigate(['']);
        }
      );
  }

  private updateDates(): void {
    this.todo.lastEditingDate = new Date().toDateString();
  }
}
