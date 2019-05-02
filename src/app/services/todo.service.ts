import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { TodoModel } from 'src/models/todo.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private apiUrl = "http://localhost:3000/todos/";

  constructor(
    private httpClient: HttpClient
  ) { }

  public getTodoList(): Observable<TodoModel[]> {
    return this.httpClient
      .get<TodoModel[]>(this.apiUrl)
      .pipe(
        map((response: TodoModel[]) => {
          return response.splice(0, 20);
        }),
        map((response) => {
          const resultArr: TodoModel[] = [];
          response.forEach(elem => {
            resultArr.push(new TodoModel(
              elem.id,
              elem.title,
              elem.body,
              elem.creatingDate,
              elem.lastEditingDate
            ));
          });
          return resultArr;
        })
      );
  }

  public getTodoBy(id: string): TodoModel {
    return undefined;
  }

  public addTodo(): void {
    
  }

  public updateTodo(): void {
    
  }

  public deleteTodoBy(id: string): void {
    
  }
}
