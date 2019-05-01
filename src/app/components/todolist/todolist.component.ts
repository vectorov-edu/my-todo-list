import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { TodoModel } from 'src/models/todo.model';
import { Response } from 'selenium-webdriver/http';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  private todoList: TodoModel[] = [];
  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
  }

  public getTodoList() {
    this.todoService
    .getTodoList()
    .subscribe((response) => {
      console.log(response);
      this.todoList = response;
    });
  }

}
