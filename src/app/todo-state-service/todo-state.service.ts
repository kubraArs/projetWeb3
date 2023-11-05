import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoStateService {
  private todoData: any;

  getTodoData() {
    return this.todoData;
  }

  setTodoData(data: any) {
    this.todoData = data;
  }

}