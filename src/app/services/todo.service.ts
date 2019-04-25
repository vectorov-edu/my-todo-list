import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private apiUrl = "http://localhost:3000/todos/";

  constructor() { }
}
