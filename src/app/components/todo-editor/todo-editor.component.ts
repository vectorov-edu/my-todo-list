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
  public editorTitle = '';
  private currentPath: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private todoService: TodoService
  ) { }

  ngOnInit() {
    //debugger;
    this.currentPath = this.activatedRoute.snapshot.url[0].path;
    if(this.currentPath === 'edit') {
      this.editorTitle = 'Editing the todo';
      this.getTodoFromDB();
    } else {
      this.editorTitle = 'Adding the new todo';
      this.getNewTodo();
    }
  }

  private getTodoFromDB() {
    this.activatedRoute.paramMap.subscribe(
      params => {
        this.todoService.getTodoBy(params.get('id')).subscribe((todo: TodoModel) => {
            this.todo = todo;
          }
        );
      }
    );
  }

  private getNewTodo() {
    let newId = 0;
    this.todoService
      .getTodoList()
      .subscribe((response) => {
        newId = response
          .reduce((p, v) => {
            return (p.id > v.id ? p : v);
          }).id;

          this.todo = new TodoModel(newId + 1, '', '', '', '');
        });
  }

  public apply() {
    if(this.currentPath === 'edit') {
      this.updateTodo();
    } else {
      this.addTodo();
    }

  }
  private addTodo() {
    this.todo.creatingDate = new Date().toDateString();
debugger;
    this.todoService
      .addTodo(this.todo)
      .subscribe(
        (response) => {
          this.router.navigate(['']);
        }
      );
  }

  private updateTodo(): void {
    this.todo.lastEditingDate = new Date().toDateString();

    this.todoService
      .updateTodo(this.todo)
      .subscribe(
        (todo) => {
          debugger;
          this.router.navigate(['']);
        }
      );
  }
}
