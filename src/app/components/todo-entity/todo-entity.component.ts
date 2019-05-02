import { Component, OnInit, Input } from '@angular/core';
import { TodoModel } from 'src/models/todo.model';

@Component({
  selector: 'tr[app-todo-entity]',
  templateUrl: './todo-entity.component.html',
  styleUrls: ['./todo-entity.component.css']
})
export class TodoEntityComponent implements OnInit {

  @Input() todoEntity: TodoModel;

  constructor() { }

  ngOnInit() {
    console.log('todoEntity = ' + this.todoEntity);
    console.log(this.todoEntity);
  }

}
