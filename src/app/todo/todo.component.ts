import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {TodoStateService} from "../todo-state-service/todo-state.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  taskArray: any[] = [];

  constructor(private todoStateService: TodoStateService) {}

  ngOnInit() {
    this.taskArray = this.todoStateService.getTodoData() || [];
  }

  onSubmit(form: NgForm) {
    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: false
    })
    form.reset(); //pour vider le input
    this.todoStateService.setTodoData(this.taskArray);
  }

  //on recupere l'index du task du tableau
  onDelete(index: number) {
    this.taskArray.splice(index, 1);//supp a l'indice 1 seule fois
  }

  onCheck(index: number) {
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
    this.todoStateService.setTodoData(this.taskArray);
  }
}
