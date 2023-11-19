import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoStateService } from '../../service/todo-state-service/todo-state.service';
import { SidebarService } from '../../service/sidebar-service/sidebar.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  sideNavStatus: boolean = false;
  taskArray: any[] = [];

  constructor(    
    private sidebarService: SidebarService,
    private todoStateService: TodoStateService
  ) {}

  ngOnInit() {
    this.taskArray = this.todoStateService.getTodoData() || [];
    
    this.sidebarService.sideNavStatus$.subscribe(status => {
      this.sideNavStatus = status;
    });
  }

  onSubmit(form: NgForm) {
    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: false
    });
    form.reset();
    this.todoStateService.setTodoData(this.taskArray);
  }

  onDelete(index: number) {
    this.taskArray.splice(index, 1);
  }

  onCheck(index: number, isChecked: boolean) {
    this.taskArray[index].isCompleted = isChecked;
    this.todoStateService.setTodoData(this.taskArray);
  }
}
