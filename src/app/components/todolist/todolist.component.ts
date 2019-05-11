import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { TodoModel } from 'src/models/todo.model';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  private todoList: TodoModel[] = [];

  constructor(
    private todoService: TodoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getTodoList();
  }

  public getTodoList() {
    this.todoService
    .getTodoList()
    .subscribe((response) => {
      //console.log(response);
      this.todoList = response;
    });
  }

  public addTodo() {
    this.router.navigate(['add']);
  }

}
